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

// typeof Car -> object

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
  // ): T { // object
): InstanceType<T> {
  // object
  return new constructor(...props);
}

const personA = createInstance(Person, 'Jan', 34);
const personB = createInstance(Person, 'Janina', 42);

personA.age;
personA.name;

const car = createInstance(Car, 'polonez'); // Typ: Car

type CarType = typeof Car;
// const newCar: CarType = {};
car.model;

// const person = new Person('random');
