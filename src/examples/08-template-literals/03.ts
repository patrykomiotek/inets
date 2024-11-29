/**
 * Stwórz typ CSSUnit reprezentujący jednostki CSS:
 * "px", "em", "rem", "%". Następnie utwórz typ CSSValue,
 * który będzie łączył liczbę (jako string) z jedną z tych jednostek.
 */
type CSSUnit = 'px' | 'rem'; // change me
type CSSValue = `${number}${CSSUnit}`; // change me

// example usage:
const fontSize: CSSValue = '16px'; // Poprawne
const margin: CSSValue = '1.5rem'; // Poprawne
const padding: CSSValue = '10'; // Błąd - brak jednostki

const number1 = 1_000;
const test1: CSSValue = `${number1}rem`; // poprawne
const test2: CSSValue = '1_000rem'; // niepoprawne
