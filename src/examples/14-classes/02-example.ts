class Point {
  // readonly x: number;
  // readonly y: number;

  // private x: number;
  // private y: number;

  private constructor(
    public x: number,
    public y: number,
  ) {}

  static createPoint({ x, y }: { x: number; y: number }) {
    return new Point(x, y);
  }

  public calculate() {
    return 123;
  }
}

// const point = new Point();
// console.log(point.x);
// console.log(point.y);

const newPoint = Point.createPoint({ x: 100, y: 200 });
newPoint.x;
newPoint.y;
newPoint.calculate();

// @ts-expect-error
// console.log(point.x);
// console.log(point.abcdf);
// console.log((point.abcdf = 123));
