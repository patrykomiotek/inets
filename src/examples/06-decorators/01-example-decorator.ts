function controller(constructor: Function) {
  console.log(`${constructor.name} was used`);
}

function log(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method: ${propertyKey} with arguments: ${args}`);

    return originalMethod.apply(this, args);
  };
}

@controller
class Example {
  car: string = 'audi';

  @log
  someMethod(arg: number) {
    return arg * 2;
  }
}

const example = new Example();
example.someMethod(1);
