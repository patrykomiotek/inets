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
  age: number;
  email: string;
};

// type PartialUser = Partial<User>;
// type UserKeys = keyof User;

type MyPartial<T> = {
  [K in keyof T]?: T[K];
};
type PartialUser = MyPartial<User>;

interface Config1 {
  host?: string;
  port?: number;
}

interface Config2 {
  host: string;
  port?: number;
}

// type RequiredConfig = Required<Config1>;
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};
type RequiredConfig = MyRequired<Config1>;

type UserKeys = keyof User;
// declare const userKeys: UserKeys = 'name';

// declare createUser(user: User); // { name: 'abc', age: undefined}, {name: 'abc', age: 123}

const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
}; // as const;

type Config = typeof config;

config.apiUrl = 'https://evil.com';
