type FuncReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function foo(): number {
  return 42;
}

type FooReturnType = FuncReturnType<typeof foo>; // number

// =======

type ArrayElementType<T> = T extends (infer E)[] ? E : T;

type NumberArrayType = ArrayElementType<number[]>; // number
type StringType = ArrayElementType<string>; // string

// =======

type Unpromisify<T> = T extends Promise<infer U> ? U : T;

type PromiseNumber = Unpromisify<Promise<number>>; // number
type JustString = Unpromisify<string>; // string

// =======

type ExtractMiddle<T> = T extends `${infer Start}${infer Middle}${infer End}`
  ? Middle
  : never;

type Result = ExtractMiddle<'abc'>; // "b"
