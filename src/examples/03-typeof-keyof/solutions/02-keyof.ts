/**
 * Zdefiniuj interfejs Car z właściwościami make, model i year.
 * Użyj keyof, aby utworzyć typ CarProperties, który reprezentuje klucze interfejsu Car.
 * Napisz funkcję getCarProperty, która przyjmuje obiekt Car i klucz typu CarProperties, a następnie zwraca wartość określonej właściwości.
 */

interface Car {
  make: string;
  model: string;
  year: string;
}

type CarProperties = keyof Car;

const getCarProperty = (car: Car, key: CarProperties) => {
  return car[key];
};

declare const car: Car;
getCarProperty(car, 'make');
