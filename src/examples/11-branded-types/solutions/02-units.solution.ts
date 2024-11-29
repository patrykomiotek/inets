/**
 * Stwórz branded types dla Meters i Feet.
 * Napisz funkcję konwertującą Meters na Feet.
 */

// your code here
type Meters = number & { readonly brand: unique symbol };
type Feet = number & { readonly brand: unique symbol };

const metersToFeet = (arg: Meters) => {
  let value = 123;
  return value as Feet;
};

// use examples:
const length1 = 5 as Meters;
const length2 = 10 as Feet;

const convertedLength = metersToFeet(length1); // Powinno zwrócić wartość typu Feet
metersToFeet(length2); // Powinno zgłosić błąd kompilacji
