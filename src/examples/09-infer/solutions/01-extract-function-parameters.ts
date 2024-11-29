import { Equal, Expect } from '../../../helpers/type-utils';

type FirstParameter<T> = T extends (a: infer F, ...rest: any[]) => void
  ? F
  : never; // change me

// example usage:
type T1 = FirstParameter<(a: number, b: string) => void>; // number
type T2 = FirstParameter<(x: boolean) => void>; // boolean
type T3 = FirstParameter<() => void>; // unknown

type types = [
  Expect<Equal<T1, number>>,
  Expect<Equal<T2, boolean>>,
  Expect<Equal<T3, unknown>>,
];
