// массив фиксированной длины и типа на каждой позиции — координаты, [value, error], 
// React hooks pattern.
// Синтаксис: [A, B, C?]

type RGB = [number, number, number];
type NamedRBG = [name: string, ...rgb: RGB];

const red: RGB = [255, 0, 0];
const named: NamedRBG = ["red", 255, 0, 0];

function luminance([r, g, b]: RGB): number {
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

console.log(luminance(red), named[0]);