/**
 * Stwórz typ Coordinate reprezentujący współrzędne w formacie "x,y",
 * gdzie x i y są liczbami. Następnie stwórz funkcję parseCoordinate,
 * która przyjmuje string typu Coordinate i zwraca obiekt z właściwościami
 * x i y jako liczbami.
 */
type Coordinate = `${number},${number}`; // change me

function parseCoordinate(coord: Coordinate): { x: number; y: number } {
  // change me
}

// example usage:
console.log(parseCoordinate('10,20')); // { x: 10, y: 20 }
console.log(parseCoordinate('0,0')); // { x: 0, y: 0 }
console.log(parseCoordinate('10,20,30')); // Błąd - niepoprawny format
