export {};

class Point {
  #x: number;
  #y: number;

  constructor(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }

  getCoordinates() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  setCoordinates({ x, y }: { x: number; y: number }) {
    this.#x = x;
    this.#y = y;
  }
}

const point = new Point(1, 2);
// console.log(point.x);
// console.log(point.y);

console.log(point.getCoordinates());
console.log(point.setCoordinates({ x: 100, y: 200 }));

console.log(point.#x);
