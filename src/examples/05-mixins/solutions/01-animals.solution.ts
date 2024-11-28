// Definicja typu konstruktora dla mixinów
type AnimalConstructor<T = {}> = new (...args: any[]) => T;

const CanFly = <TBase extends AnimalConstructor>(Base: TBase) => {
  return class extends Base {
    fly = () => console.log('Flying!');
  };
};

const CanSwim = <TBase extends AnimalConstructor>(Base: TBase) => {
  return class extends Base {
    swim = () => console.log('Swimming!');
  };
};
class MyAnimal {}

const Bird = CanFly(MyAnimal);
const Fish = CanSwim(MyAnimal);
const Duck = CanFly(CanSwim(MyAnimal));

const bird = new Bird();
const fish = new Fish();
const duck = new Duck();

