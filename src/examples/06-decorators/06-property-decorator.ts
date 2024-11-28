function positive(target: any, propertyKey: string) {
  let value: number;

  const getter = () => value;

  const setter = (newValue: number) => {
    if (newValue < 0) {
      throw new Error(`Invalid value for ${propertyKey}: must be positive.`);
    }
    value = newValue;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class BankAccount {
  @positive
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  get balance(): number {
    return this._balance;
  }
}

// Usage
const account = new BankAccount(100);
console.log(account.balance); // 100

(account as any)._balance = -50;
