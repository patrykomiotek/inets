import { Equal, Expect } from '../../../helpers/type-utils';

type SplitString<S> = S extends `${infer Start}-${infer End}`
  ? [Start, End]
  : [S]; // change me

// use cases:
type T1 = SplitString<'hello-world'>; // ["hello", "world"]
type T2 = SplitString<'typescript'>; // ["typescript"]
type T3 = SplitString<'a-b-c'>; // ["a", "b-c"]

type test = [
  Expect<Equal<T1, ['hello', 'world']>>,
  Expect<Equal<T2, ['typescript']>>,
  Expect<Equal<T3, ['a', 'b-c']>>,
];
