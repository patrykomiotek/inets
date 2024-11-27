/**
 * Zdefiniuj interfejs Vehicle z właściwościami make (string) i model (string).
 * Następnie zdefiniuj interfejs Car, który dziedziczy z Vehicle i dodaje
 * właściwość year (number).
 * Utwórz obiekt typu Car i wypisz jego właściwości na konsolę.
 */
interface Vehicle {
  make: string;
  model: string;
}

interface Car extends Vehicle {
  year: number;
}

let myVehicle: Vehicle = {
  make: 'bmw',
  model: 'm5',
};

let myCar: Car = {
  make: 'toyota',
  model: 'corolla',
  year: 123,
};

myVehicle = myCar;
myCar = myVehicle as Car;

// myCar.year
