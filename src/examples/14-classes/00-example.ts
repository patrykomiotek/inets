export {};

class Point {
  // readonly x: number;
  // readonly y: number;

  private x: number = 0;
  private y: number = 0;

  get abcdf() {
    return this.x;
  }

  set abcdf(value: number) {
    this.x = value;
  }

  getCoordinates() {
    return {
      x: this.x,
      y: this.y,
    };
  }

  setCoordinates({ x, y }: { x: number; y: number }) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point();
// console.log(point.x);
// console.log(point.y);

console.log(point.getCoordinates());
console.log(point.setCoordinates({ x: 100, y: 200 }));

// @ts-expect-error
console.log(point.x);
console.log(point.abcdf); // -> x
console.log((point.abcdf = 123));
