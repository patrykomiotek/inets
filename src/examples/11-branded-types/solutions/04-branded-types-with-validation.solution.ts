/**
 * Stwórz branded type PositiveNumber, który akceptuje tylko liczby dodatnie.
 * Napisz funkcję tworzącą PositiveNumber, która rzuca wyjątek dla nieprawidłowych wartości.
 */

type PositiveNumber = number & { readonly brand: unique symbol };

const createPositiveNumber = (arg: number) => {
  if (arg >= 0) {
    return arg as PositiveNumber;
  }
  throw new Error('It is not a positive number :(');
};

// your code here
function calculateSquareRoot(arg: PositiveNumber) {
  return Math.sqrt(arg);
}

// example usage:
const positiveNum = createPositiveNumber(5); // Powinno działać
const invalidNum = createPositiveNumber(-3); // Powinno rzucić wyjątek

calculateSquareRoot(positiveNum); // Powinno działać
calculateSquareRoot(5); // Powinno zgłosić błąd kompilacji
