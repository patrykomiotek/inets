/**
 * Zdefiniuj typ OptionalProperties<T>, który zamienia wszystkie
 * właściwości typu T na opcjonalne.
 * Następnie użyj tego typu z przykładowym interfejsem.
 */
type OptionalProperties<T> = Partial<T>;
interface Me {
  name: 'test';
  surname: 'test';
}
interface Mixed {
  name: 'test';
  surname: 'test';
  age: 123;
}
type Test = OptionalProperties<Me>;

type OptionalNumberProperties<T> = {
  [K in keyof T]?: T[K] extends number ? T[K] : never;
};
type MyNumbers1 = OptionalNumberProperties<Me>;
type MyNumbers2 = OptionalNumberProperties<Mixed>;

interface MyTest {
  name: string;
}

const a: OptionalProperties<MyNumbers2> = {};
