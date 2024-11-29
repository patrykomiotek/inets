/**
 * Stwórz branded types dla EmailAddress i PhoneNumber.
 * Następnie napisz funkcję, która akceptuje tylko EmailAddress.
 */

// your code here

// example usage:
const email = 'user@example.com' as EmailAddress;
const phone = '123456789' as PhoneNumber;

sendEmail(email); // Powinno działać
sendEmail(phone); // Powinno zgłosić błąd kompilacji
sendEmail('random@email.com'); // Powinno zgłosić błąd kompilacji
