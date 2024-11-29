/**
 * Stwórz system branded types dla różnych walut (np. USD, EUR, GBP).
 * Napisz funkcję konwersji walut, która akceptuje źródłową walutę,
 * kwotę i docelową walutę.
 */

// your code here
// type Money = {
//   value: number; // 50
//   symbol: string; // PLN
// }

declare const currencyBrand: unique symbol;

type Currencies = 'USD' | 'EUR' | 'GBP';
type Currency<T extends Currencies> = number & { [currencyBrand]: T };

// type USD = Currency<'USD'>;
// type EUR = Currency<'EUR'>;
// type GBP = Currency<'GBP'>;

// const createCurrency = <T extends string>(amount: number, currency: T): Currency<T> => {
//   return amount as Currency<typeof currency>;
// };
const createCurrency = <T extends Currencies>(amount: number, currency: T) => {
  return amount as Currency<T>;
};

const convertCurrency = <T extends Currencies, U extends Currencies>(
  fromCurrency: Currency<T>,
  toCurrency: U,
  rate: number,
): Currency<U> => {
  return (fromCurrency * rate) as Currency<U>;
};

// bład
// type Currencies = 'USD' | 'EUR' | 'GBP';
// type Currency<T extends Currencies> = number & { [currencyBrand]: T } ;
// number & { [currencyBrand]: T }  + number & { [currencyBrand]: T }
const addCurrencies = <T extends Currencies>(
  a: Currency<T>,
  b: Currency<T>,
): Currency<T> => {
  return (a + b) as Currency<T>;
};

// const addCurrencies = <T extends Currency>(left: Money<T>, right: Money<T>): Money<T> => {
//   return {value: left.value+right.value, symbol: left.symbol};
// }

// ues cases:
const usd = createCurrency(100, 'USD');
// const pln = createCurrency(100, 'PLN');

const eur = convertCurrency(usd, 'EUR', 0.85); // Konwersja USD na EUR
const gbp = createCurrency(50, 'GBP');

const result = eur + eur; // result powinien byc Currency<EUR>

addCurrencies(usd, eur); // Powinno zgłosić błąd kompilacji (różne waluty)
addCurrencies(usd, createCurrency(200, 'USD')); // Powinno działać

// type Euro = 'EUR' & {readonly brand: unique symbol};
// type Dollar = 'USD' & {readonly brand: unique symbol};
// type Pound = 'GBP' & {readonly brand: unique symbol};
// type Currency = Euro | Dollar | Pound;
// type Money<T extends Currency> = {
//     value: number;
//     symbol: T;
// }
// const createCurrency = <T extends Currency>(amount: number, currency: T): Money<T> => {
//     return {value: amount, symbol: currency };
// }
// const convertCurrency = <T extends Currency, U extends Currency>(amount: Money<T>, currency: U, rate: number): Money<U> => {
//     return {value: amount.value*rate, symbol: currency };
// }
// const addCurrencies = <T extends Currency>(left: Money<T>, right: Money<T>): Money<T> => {
//     return {value: left.value+right.value, symbol: left.symbol};
// }
// // ues cases:
// const usd = createCurrency(100, 'USD' as Dollar);
// const eur = convertCurrency(usd, 'EUR' as Euro, 0.85); // Konwersja USD na EUR
// const gbp = createCurrency(50, 'GBP' as Pound);
// //@ts-expect-error
// addCurrencies(usd, eur); // Powinno zgłosić błąd kompilacji (różne waluty)
// addCurrencies(usd, createCurrency(200, 'USD' as Dollar)); // Powinno działać (edited)
