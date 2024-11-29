/**
 * Stwórz typ generyczny DeepFlatten, który spłaszcza wielowymiarowe tablice
 * do jednowymiarowej tablicy. Typ ten powinien działać rekurencyjnie, czyli spłaszczać
 * tablice o dowolnej głębokości.
 *
 * Wymagania
 * Typ DeepFlatten<T> powinien przyjmować jeden parametr typu T.
 * Jeśli T jest tablicą, typ powinien zwrócić DeepFlatten<U>, gdzie U to typ elementów tej tablicy.
 * Jeśli T nie jest tablicą, typ powinien zwrócić T.
 * Typ powinien działać poprawnie dla różnych przypadków, takich jak:
 * Tablice jednowymiarowe
 * Tablice wielowymiarowe
 * Typy, które nie są tablicami
 */

// Przykłady uzycia
type Result1 = DeepFlatten<number[]>; // Result1 = number
type Result2 = DeepFlatten<number[][]>; // Result2 = number
type Result3 = DeepFlatten<string[][][]>; // Result3 = string
type Result4 = DeepFlatten<boolean | number[]>; // Result4 = boolean | number
type Result5 = DeepFlatten<(number | string)[][]>; // Result5 = number | string
