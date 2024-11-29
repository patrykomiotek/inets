type FirstParameter<T> = undefined; // change me

// example usage:
type T1 = FirstParameter<(a: number, b: string) => void>; // number
type T2 = FirstParameter<(x: boolean) => void>; // boolean
type T3 = FirstParameter<() => void>; // never
