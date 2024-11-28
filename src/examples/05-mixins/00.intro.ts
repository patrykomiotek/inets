// Definicja typu konstruktora dla mixinów
type Constructor<T = {}> = new (...args: any[]) => T;

// Mixin dodający właściwość timestamp
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}

// Mixin dodający metody activate i deactivate
function Activable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActivated = false;
    activate() {
      this.isActivated = true;
    }
    deactivate() {
      this.isActivated = false;
    }
  };
}

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

const TimestampedPerson = Timestamped(Person);

const PersonWithTime = new TimestampedPerson('Marcin', 56);
// PeronWithTime.

const newPerson: Person = PersonWithTime;
// newPerson.

class User {
  name = '';
}

// class Timestamp {
//   timestamp = Date.now();
// };
// class Active {
//   isActivated = false;
//     activate() {
//       this.isActivated = true;
//     }
//   deactivate() {
//     this.isActivated = false;
//   }
// }
// class TimestampedUser extends Timestamp

// Użycie złożonych klas
// Tworzenie klas złożonych z mixinów
const TimestampedUser = Timestamped(User);
const TimestampedActivatableUser = Timestamped(Activable(User));

const timestampedUserExample = new TimestampedUser();
console.log(timestampedUserExample.timestamp);

const timestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(timestampedActivatableUserExample.timestamp);
console.log(timestampedActivatableUserExample.isActivated);
timestampedActivatableUserExample.activate();
console.log(timestampedActivatableUserExample.isActivated);
