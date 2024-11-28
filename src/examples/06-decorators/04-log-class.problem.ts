function logClass(target: Function) {
  console.log(`Class ${target.name} is being created.`);
}

@logClass
class User {
  constructor(public name: string) {}
}

// Usage
const user = new User('Alice'); // Logs: Class User is being created.
