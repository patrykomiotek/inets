function freezeMe(target: any, propertyKey: string) {
  console.log({ target, propertyKey });
  let value = target[propertyKey];
  console.log({ value });

  const getter = () => {
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

describe('Bank account', () => {
  it('should throw an error when accessing freezed property', () => {
    const account = new BankAccount(1000);
    console.log(account.balance); // 1000
    expect(account.balance).toBe(1000);

    account.deposit(500);
    console.log(account.balance); // Still 1000, with a warning in the console
    expect(account.balance).toBe(1000);

    account.withdraw(200);
    console.log(account.balance); // Still 1000, with a warning in the console

    // Trying to directly modify the balance
    (account as any)._balance = 2000; // This will log a warning and not change the balance
    console.log(account.balance); // Still 1000
  });
});
