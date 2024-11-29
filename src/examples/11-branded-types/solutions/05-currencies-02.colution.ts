declare const __brand: unique symbol;

type Currency = 'USD' | 'GBP' | 'EUR';

type Brand<B> = { [__brand]: B };
type Branded<T, B extends Currency> = T & Brand<B>;

function createCurrency<T extends Currency>(value: number, currency: T) {
  return value as Branded<number, T>;
}

// ues cases:
const usd = createCurrency(100, 'USD');
const gbp = createCurrency(50, 'GBP');
const pln = createCurrency(100, 'PLN'); // Error, bo nie jest zdefiniowany Currency PLN

function convertCurrency<T extends Currency, S extends Currency>(
  fromCurrency: Branded<number, T>,
  toCurrency: S,
  ratio: number,
) {
  return (fromCurrency * ratio) as Branded<number, S>;
}

const eur = convertCurrency(usd, 'EUR', 0.85); // Konwersja USD na EUR
const g = convertCurrency(eur, 'GBP', 0.85); // Konwersja USD na EUR
const eupln = convertCurrency(usd, 'PLN', 0.85); // Konwersja USD na EUR, Error, bo nie jest zdefiniowany Currency PLN

function addCurrencies<T extends Branded<number, Currency>>(val1: T, val2: T) {
  return val1 + val2;
}

addCurrencies(usd, eur); // Powinno zgłosić błąd kompilacji (różne waluty)
addCurrencies(usd, createCurrency(200, 'USD')); // Powinno działać
