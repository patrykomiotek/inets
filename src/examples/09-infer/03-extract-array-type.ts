type ArrayElement<T> = undefined; // change me

// example usage:
type T1 = ArrayElement<string[]>; // string
type T2 = ArrayElement<[number, boolean]>; // number | boolean
type T3 = ArrayElement<{ length: number }>; // unknown
