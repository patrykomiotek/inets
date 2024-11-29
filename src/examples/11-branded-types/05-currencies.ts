/**
 * Stwórz system branded types dla różnych walut (np. USD, EUR, GBP).
 * Napisz funkcję konwersji walut, która akceptuje źródłową walutę,
 * kwotę i docelową walutę.
 */

// USD, GBP, EUR
// your code here

// ues cases:
const usd = createCurrency(100, 'USD'); // -> USD
const gbp = createCurrency(50, 'GBP'); // -> GBP
// const pln = createCurrency(100, 'PLN');

const eur = convertCurrency(usd, 'EUR', 0.85); // Konwersja USD na EUR

addCurrencies(usd, eur); // Powinno zgłosić błąd kompilacji (różne waluty)
addCurrencies(usd, createCurrency(200, 'USD')); // Powinno działać
