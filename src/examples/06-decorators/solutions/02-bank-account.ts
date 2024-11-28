// Decorator factory
// TODO: change propertyKey to type string and investigate types
function freezeMe(target: any, propertyKey: any) {
  let value = target[propertyKey];

  const getter = function () {
    return value;
  };

  const setter = function (newVal: any) {
    console.warn(
      `Attempt to change frozen property '${propertyKey}' prevented.`,
    );
    // Optionally, you can throw an error instead of just logging a warning
    // throw new Error(`Cannot assign to frozen property '${propertyKey}'`);
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: false,
  });
}

class BankAccount {
  @freezeMe
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  get balance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      // This will not actually change the balance due to the @freezed decorator
      this._balance += amount;
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this._balance) {
      // This will not actually change the balance due to the @freezed decorator
      this._balance -= amount;
    }
  }
}

// Usage
const account = new BankAccount(1000);
console.log(account.balance); // 1000

account.deposit(500);
console.log(account.balance); // Still 1000, with a warning in the console

account.withdraw(200);
console.log(account.balance); // Still 1000, with a warning in the console

// Trying to directly modify the balance
(account as any)._balance = 2000; // This will log a warning and not change the balance
console.log(account.balance); // Still 1000
