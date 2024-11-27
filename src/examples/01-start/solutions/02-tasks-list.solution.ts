/**
 * Stwórz interfejs Task z właściwościami:
 * id (number), title (string), completed (boolean).
 * Następnie utwórz tablicę zadań i funkcję do dodawania
 * nowych zadań.
 */

// Zdefiniuj interfejs Task
interface Task {
  id: number;
  title: string;
  complete: boolean;
}

// Utwórz kolekcję tasks
// const tasks: Task[] = [];
const tasks = new Set<Task>();

// Zaimplementuj funkcję addTask
function addTask(title: string): void {
  // tasks.push({
  //   id: 1,
  //   title,
  //   complete: false
  // });
  tasks.add({
    id: 1,
    title,
    complete: false,
  });
}

// Przykładowe użycie:
it('Should have proper values', () => {
  addTask('Learn TypeScript');
  expect(tasks.size).toEqual(1);
});

// {
//   key: string | Task;
// }

// type CacheEntry = Record<string, Task>;
type CacheEntry = Record<'one' | 'third', Task>;

const cache: CacheEntry = {
  one: {
    id: 123,
    title: 'Kupić mleko',
    complete: false,
  },
  third: {
    id: 456,
    complete: false,
    title: 'Nauczyć się TS',
  },
};

const newTasks = new Map<'one' | 'third', Task>();
// newTasks.
newTasks.set('one', {
  id: 2,
  title: 'Kupić mleko',
  complete: false,
});

class MyCache {
  // constructor(private cache: CacheEntry) {}
  // constructor(private cache: Map<string, Task>) {}

  // cache: Map<string, Task>;

  // constructor(cache: Map<string, Task>) {
  //   this.cache = cache;
  // }

  constructor(private cache: Map<string, Task>) {}

  add(key: string, value: Task) {
    this.cache.set(key, value);
  }
}

const myNewCache = new MyCache(newTasks);
myNewCache.add('newest', {
  id: 876,
  complete: true,
  title: 'Nakarmić koty',
});
// myNewCache.cache

export {};

class Point {
  #x: number;
  #y: number;
  z: number;

  constructor(x: number, y: number) {
    this.#x = x;
    this.#y = y;
    this.z = 0;
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
console.log(point.z);
