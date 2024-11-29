type SplitString<S> = undefined; // change me

// use cases:
type T1 = SplitString<'hello-world'>; // ["hello", "world"]
type T2 = SplitString<'typescript'>; // ["typescript"]
type T3 = SplitString<'a-b-c'>; // ["a", "b-c"]
