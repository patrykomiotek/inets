import { Equal, Expect } from '../../../helpers/type-utils';

type UnwrapPromise<T> = T extends Promise<infer R> ? R : T; // change me

// example usage
type T1 = UnwrapPromise<Promise<string>>; // string
type T2 = UnwrapPromise<Promise<number[]>>; // number[]
type T3 = UnwrapPromise<string>; // string

type types = [
  Expect<Equal<T1, string>>,
  Expect<Equal<T2, number[]>>,
  Expect<Equal<T3, string>>,
];
