/**
 * Napisz generyczną funkcję getPropertyValue, która przyjmuje
 * obiekt i klucz, i zwraca wartość tej właściwości.
 * Użyj ograniczenia extends dla klucza, aby zapewnić,
 * że jest on prawidłowy dla danego obiektu.
 */
const getPropertyValue = <T, K extends keyof T>(arg: T, key: K) => {
  return arg[key];
};
