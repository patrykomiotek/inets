interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Poprawne użycie
const myDog: Dog = {
  name: 'Buddy',
  breed: 'Labrador',
};

// To również jest poprawne, ponieważ Dog rozszerza Animal
const someAnimal: Animal = myDog;

// To spowoduje błąd, ponieważ brakuje właściwości 'breed'
// const invalidDog: Dog = {
//   name: "Rex"
// };

// Funkcja przyjmująca Animal
function printAnimalName(animal: Animal) {
  console.log(animal.name);
}

// Możemy przekazać obiekt Dog do funkcji oczekującej Animal
printAnimalName(myDog); // Działa poprawnie
