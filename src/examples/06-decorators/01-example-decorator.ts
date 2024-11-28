import 'reflect-metadata';

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

function logParameter(
  target: any,
  propertyKey: string,
  parameterIndex: number,
) {
  console.log({ target, propertyKey, parameterIndex });

  if (typeof target !== 'object') {
    console.warn('Invalid target for property decorator');
  }

  const existingParameters =
    Reflect.getOwnMetadata('parameters', target, propertyKey) || [];

  console.log({ existingParameters });

  existingParameters.push(parameterIndex);

  Reflect.defineMetadata('parameters', existingParameters, target, propertyKey);
}

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
  });
}

@controller
class Example {
  // @Length(10)
  car: string = 'audi';

  @positive
  balance: number = 0;

  // @isPositive -> throw new Error
  @log
  // @cache
  someMethod(@logParameter arg: number, @logParameter arg2: string) {
    return arg * 2;
  }
}

const example = new Example();
example.someMethod(1, 'lorem ipsum');
example.balance = -200;
