class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  model: string;

  constructor(model: string) {
    this.model = model;
  }
}

// function createInstance<T extends new (...args: any[]) => any>(
// function createInstance<T extends new (...args: any[]) => any>(constructor: T, ...constructorProps: any[]): InstanceType<T> {
//   return new constructor(constructorProps);
// }
// function createInstance<T extends new (...args: any[]) => any>
//   (constructor: T, ...constructorProps: ConstructorParameters<T>):
//   InstanceType<T> {
//   return new constructor(...constructorProps);
// }

function createInstance<T extends new (...args: any[]) => any>(
  constructor: T,
  ...props: ConstructorParameters<T>
): InstanceType<T> {
  return new constructor(...props);
}

const personA = createInstance(Person, 'Jan', 34);
const personB = createInstance(Person, 'Janina', 42);

// personA.age
// personA.name

const car = createInstance(Car, 'polonez'); // Typ: Car
// car.model

// const person = new Person('random');
