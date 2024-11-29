/**src/examples/09-infer/06-deep-flatten.ts
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

import { Equal, Expect } from '../../../helpers/type-utils';

type DeepFlatten<T> = T extends (infer U)[] ? DeepFlatten<U> : T;

// Przykłady uzycia
type T1 = DeepFlatten<number[]>; // Result1 = number
type T2 = DeepFlatten<number[][]>; // Result2 = number
type T3 = DeepFlatten<string[][][]>; // Result3 = string
type T4 = DeepFlatten<(boolean | number)[]>; // Result4 = boolean | number
type T5 = DeepFlatten<(number | string)[][]>; // Result5 = number | string

type test = [
  Expect<Equal<T1, number>>,
  Expect<Equal<T2, number>>,
  Expect<Equal<T3, string>>,
  Expect<Equal<T4, boolean | number>>,
  Expect<Equal<T5, number | string>>,
];
