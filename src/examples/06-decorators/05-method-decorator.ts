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

class Calculator {
  @logMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

// Usage
const calculator = new Calculator();
console.log(calculator.add(5, 3)); // Logs method call and outputs: 8
