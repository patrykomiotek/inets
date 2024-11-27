interface Employee {
  id: number;
  name: string;
}
interface Manager {
  team: string;
}

type Boss = Employee & Manager;
type SuperBossOrSuperManager = Employee | Manager;

const boss1: Boss = {
  id: 1,
  name: 'janusz',
  team: 'A',
};

const superBoss: SuperBossOrSuperManager = {
  id: 3,
  name: 'marcin',
  team: 'B',
  // zxcvbnmp: 'B',
};

const superManager: SuperBossOrSuperManager = {
  team: 'B',
  // zxcvbnmp: 'B',
};

type User = {
  name: string;
  // age: number | undefined; // function, business logic, state, not component
  age?: number;
};

// declare createUser(user: User); // { name: 'abc', age: undefined}, {name: 'abc', age: 123}
