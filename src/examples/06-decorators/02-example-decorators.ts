//TODO: types for particular decorator types
// https://www.typescriptlang.org/docs/handbook/decorators.html
function logTarget(target: Object, propertyKey?: string | symbol): void {
  console.log('Decorator target:', target, 'Property:', propertyKey);
}

@logTarget
class Example {
  @logTarget
  static staticProperty: string;

  @logTarget
  instanceProperty: string = '124';

  @logTarget
  static staticMethod() {}

  @logTarget
  instanceMethod() {}
}
