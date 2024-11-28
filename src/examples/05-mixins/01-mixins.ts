// Definicja typu konstruktora dla mixinów
type Constructor<T = {}> = new (...args: any[]) => T;

// Mixin dodający właściwość timestamp
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}

// Mixin dodający metody activate i deactivate
function Activatable<TBase extends Constructor>(Base: TBase) {
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

// Prosta klasa
class User {
  name = '';
}

// Tworzenie klas złożonych z mixinów
const TimestampedUser = Timestamped(User);
const TimestampedActivatableUser = Timestamped(Activatable(User));

// Użycie złożonych klas
const timestampedUserExample = new TimestampedUser();
console.log(timestampedUserExample.timestamp);

const timestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(timestampedActivatableUserExample.timestamp);
console.log(timestampedActivatableUserExample.isActivated);
timestampedActivatableUserExample.activate();
console.log(timestampedActivatableUserExample.isActivated);
