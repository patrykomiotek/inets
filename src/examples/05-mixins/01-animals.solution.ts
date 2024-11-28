type Constructor<T = {}> = new (...args: any[]) => T;

function CanFly<TBase extends Constructor>(Base: TBase) {
  return class CanFlyCls extends Base {
    fly() {
      console.log('Flying!');
    }
  };
}
function CanSwim<TBase extends Constructor>(Base: TBase) {
  return class CanSwimCls extends Base {
    swim() {
      console.log('Swimming!');
    }
  };
}

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const Bird = CanFly(Animal);
const Fish = CanSwim(Animal);
const Duck = CanFly(CanSwim(Animal));

const bird1 = new Bird('bird');
const fish1 = new Fish('fish');

const duck1 = new Duck('duck');

bird1.fly();
fish1.swim();
duck1.fly();
duck1.swim();
