function createInstance<T extends new (...args: any[]) => any>(
  constructor: T,
): InstanceType<T> {
  return new constructor();
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Car {
  model: string;
  constructor(model: string) {
    this.model = model;
  }
}

const person = createInstance(Person); // Typ: Person
const car = createInstance(Car); // Typ: Car

// Błąd kompilacji - to nie jest konstruktorem
// @ts-expect-error
const number = createInstance('abcd');
