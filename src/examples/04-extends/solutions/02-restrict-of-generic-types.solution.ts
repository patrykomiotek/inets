/**
 * Napisz funkcję logLength, która przyjmuje argument typu
 * generycznego T, ale tylko wtedy, gdy T ma właściwość length
 * typu number. Funkcja powinna wypisać długość na konsolę.
 */
// const logLength = <T extends { length: number }>(arg: T) => {
const logLength = <T extends { length: number }>(arg: T) => {
  console.log(arg.length);
};

logLength([1, 2, 3]);
logLength('hello');
logLength({ age: 19, length: 123 });
// logLength(123);
