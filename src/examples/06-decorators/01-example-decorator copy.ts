// enable flags in tsconfig.json:
// "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
// "emitDecoratorMetadata": true,

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method: ${propertyKey} with arguments: ${args}`);

    return originalMethod.apply(this, args);
  };
}

function controller(constructor: Function) {
  //
}

@controller
export class Example {
  // @log()
  car: string = 'audi';

  @log
  someMethod(arg: number) {
    return arg * 2;
  }
}
