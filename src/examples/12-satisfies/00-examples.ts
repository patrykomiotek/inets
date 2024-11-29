type RGB = [number, number, number];
// type Color = Record<string, string | RGB>;
type Color = {
  [key: string]: string | RGB;
};
// type RGBColor = { [key: string]: RGB } satisfies Color;

// Z użyciem satisfies
const palette2: Color = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
};

const paletteWithSatisfies = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} satisfies Color;

// Z użyciem as
const paletteAs = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} as Color;

// TypeScript wie, że palette.red jest tablicą, a palette.green jest stringiem
const redComponent = paletteWithSatisfies.red[0]; // OK
const greenUppercase = paletteWithSatisfies.green.toUpperCase(); // OK

// TypeScript traktuje wszystkie wartości jako string | RGB
const redComponentAs = paletteAs.red[0]; // OK
const greenUppercaseAs = paletteAs.green.toUpperCase(); // Błąd
