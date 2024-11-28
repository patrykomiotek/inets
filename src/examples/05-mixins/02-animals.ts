type Constructor<T = {}> = new (...args: any[]) => T;

function CanFly<Base extends Constructor>(base: Base) {
  return class extends base {
    fly() {
      console.log('Flying!');
    }
  };
}

function CanSwim<Base extends Constructor>(base: Base) {
  return class extends base {
    swim() {
      console.log('Swimming!');
    }
  };
}

class Animal {}

const FlyingAndSwimmingAnimal = CanFly(CanSwim(Animal));
const flyingAndSwimmingAnimal = new FlyingAndSwimmingAnimal();

flyingAndSwimmingAnimal.fly();
flyingAndSwimmingAnimal.swim();
