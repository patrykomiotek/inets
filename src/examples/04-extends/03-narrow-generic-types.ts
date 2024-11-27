function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

// Działa z tablicami
console.log(getLength([1, 2, 3])); // Zwraca 3

// Działa z ciągami znaków
console.log(getLength('Hello')); // Zwraca 5

// Działa z obiektami, które mają właściwość length
const customObject = {
  length: 10,
  value: 'Example',
};
console.log(getLength(customObject)); // Zwraca 10

// To spowoduje błąd kompilacji, ponieważ liczba nie ma właściwości length
// console.log(getLength(123));
