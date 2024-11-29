interface Cat {
  meow(): void;
}

interface Dog {
  bark(): void;
}

function isCat(pet: Dog | Cat): pet is Cat {
  return (pet as Cat).meow !== undefined;
}

let pet: Dog | Cat;

// Usage of the 'is' operator
if (isCat(pet)) {
  pet.meow(); // TypeScript wie, ze 'pet' jest Cat
} else {
  pet.bark(); // TypeScript wie, ze 'pet' jest Dog
}
