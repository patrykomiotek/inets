type UnwrapPromise<T> = undefined; // change me

// example usage
type T1 = UnwrapPromise<Promise<string>>; // string
type T2 = UnwrapPromise<Promise<number[]>>; // number[]
type T3 = UnwrapPromise<string>; // string
