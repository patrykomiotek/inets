function log(
  target: unknown,
  propertyKey: string,
  description: PropertyDescriptor,
) {
  const originalMethod = description.value;
  description.value = function (...args: unknown[]) {
    console.log(
      `Wywołanie metody ${propertyKey} z argumentami ${args.join(', ')}`,
    );
  };
}

function sealed(target: Function) {
  Object.seal(target);
  Object.seal(target.prototype);
}

@sealed
class BankAccount {
  @log
  public deposit(a: number) {
    console.log(`deposit ${a}`);
  }

  @log
  public withdraw(a: number) {
    console.log(`withdraw ${a}`);
  }
}

const bankAccount = new BankAccount();
bankAccount.deposit(1);
bankAccount.withdraw(2);

// class NotExtendableClass {
//   private constructor() {
//   }
// }

class BankAccount2 extends BankAccount {
  alert() {
    console.log('alert');
  }
}
const bankAccount2 = new BankAccount2();
bankAccount2.alert();
