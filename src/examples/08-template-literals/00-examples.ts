type Color = 'red' | 'green' | 'blue';
type Quantity = 'one' | 'two' | 'three';

type ColorfulQuantity = `${Color}-${Quantity}`;
// Typ ColorfulQuantity to:
// "red-one" | "red-two" | "red-three" | "green-one" | "green-two" | "green-three" | "blue-one" | "blue-two" | "blue-three"

// Przykład walidacji formatu
type EmailAddress = `${string}@${string}.${string}`;
const email: EmailAddress = 'user@example.com'; // OK
const invalidEmail: EmailAddress = 'not-an-email'; // Błąd
