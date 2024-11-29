/**
 * Stwórz branded types dla EmailAddress i PhoneNumber.
 * Następnie napisz funkcję, która akceptuje tylko EmailAddress.
 */
// declare const brand: unique symbol;

// type Brand<T, B> = T & { [brand]: B };

const sendEmail = (value: EmailAddress): void => {};

// your code here
type EmailAddress = string & { readonly brand: unique symbol };
type PhoneNumber = string & { readonly brand: unique symbol };

// example usage:
const email = 'user@example.com' as EmailAddress;
const phone = '+48 123456789' as PhoneNumber;

sendEmail(email); // Powinno działać
sendEmail(phone); // Powinno zgłosić błąd kompilacji
sendEmail('random@email.com'); // Powinno zgłosić błąd kompilacji
