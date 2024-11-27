type OnlyStringProperties<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type FunctionProps<T extends Function> = {
  [K in keyof T]: T[K];
};

type NonNullableProperties<T> = {
  [K in keyof T]: T[K] extends null | undefined ? never : T[K];
};

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};
