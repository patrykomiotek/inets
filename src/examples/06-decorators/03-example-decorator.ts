const log = (target: any) => {
  console.log('Target: ', target);
};

class Car {
  declare model: string;

  drive() {
    console.log('I am driving');
  }
}
