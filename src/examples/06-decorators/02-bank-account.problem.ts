function freezeMe(target: any, propertyKey: string) {
  console.log({ target, propertyKey });
  let value = target[propertyKey];

  console.log({ value });

  const getter = () => {
    console.log('decorator getter');
    return value;
  };

  const setter = (_newValue: number) => {
    console.warn(`Attempt to modify frozen property: ${propertyKey}`);
    // Do not change the value
    throw new Error(`Cannot modify frozen property: ${propertyKey}`);
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: false,
  });
}

export class BankAccount {
  @freezeMe
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  get balance(): number {
    console.log('get balance()');
    return this._balance; // This will call the getter
  }

  deposit(amount: number): void {
    if (amount > 0) {
      // Instead of modifying _balance directly, use a local variable
      const newBalance = this.balance + amount; // Use getter
      (this as any)._balance = newBalance; // This will still trigger the setter warning
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      // Use getter
      const newBalance = this.balance - amount; // Use getter
      (this as any)._balance = newBalance; // This will still trigger the setter warning
    }
  }
}

const account = new BankAccount(1000);
console.log(account.balance); // 1000

account.deposit(500);
console.log(account.balance); // Still 1000, with a warning in the console

account.withdraw(200);
console.log(account.balance); // Still 1000, with a warning in the console

// Trying to directly modify the balance
(account as any)._balance = 2000; // This will log a warning and not change the balance
console.log(account.balance); // Still 1000
