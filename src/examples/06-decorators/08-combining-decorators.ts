function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    return originalMethod.apply(this, args);
  };
}

function validatePositive(
  _target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (amount: number) {
    if (amount <= 0) {
      throw new Error('Amount must be positive.');
    }
    return originalMethod.apply(this, [amount]);
  };
}

class PaymentProcessor {
  @logMethod
  @validatePositive
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount}`);
  }
}

// Usage
const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(100); // Logs and processes payment

paymentProcessor.processPayment(-50); // Uncommenting this line will throw an error
