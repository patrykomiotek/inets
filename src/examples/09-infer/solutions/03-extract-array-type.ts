import { Equal, Expect } from '../../../helpers/type-utils';

type ArrayElement<T> = T extends (infer E)[] ? E : unknown; // change me

// example usage:
type T1 = ArrayElement<string[]>; // string
type T2 = ArrayElement<[number, boolean]>; // number | boolean
type T3 = ArrayElement<{ length: number }>; // unknown

type types = [
  Expect<Equal<T1, string>>,
  Expect<Equal<T2, number | boolean>>,
  Expect<Equal<T3, unknown>>,
];
