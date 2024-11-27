interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// type Dog = { breed: string } & { name: string }

type A = {
  name: string;
  breed: string;
};

interface B {
  name: string;
  breed: string;
}

const c = {
  name: '',
  breed: '',
};
type C = typeof c;
