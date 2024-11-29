type CallbackParameter<T> = undefined; // change me

// use cases
type T1 = CallbackParameter<
  (callback: (error: Error, result: string) => void) => void
>; // [Error, string]
type T2 = CallbackParameter<(cb: (x: number) => void) => void>; // [number]
type T3 = CallbackParameter<(callback: () => void) => void>; // []
