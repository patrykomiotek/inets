type MyReturnSingleType<T> = T extends Array<infer U> ? U : T;
// type MyReturnSingleType<T> = T extends (infer U)[] ? U : T;

// const a: MyReturnSingleType<number>; // number
// const b: MyReturnSingleType<number[]>; // number

// number -> number
// string -> string
// number[] -> number
// string[] -> string
