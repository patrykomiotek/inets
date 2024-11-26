/**
 * Zdefiniuj interfejs Employee z właściwościami id, name, department i role.
 * Napisz generyczną funkcję getProperty, która przyjmuje w argumencie obiekt oraz
 * klucz  zwraca wartość określonej właściwości z obiektu.
 * Przetestuj tę funkcję z obiektem Employee, aby pobrać różne właściwości.
 */
type Employee = {
  id: number;
  name: string;
  department: string;
  role: string;
};

// User['id']
// const getProperty = <T>(obj: T, key: keyof T) => {
// const getProperty = <T>(obj: T, key: keyof T): T[keyof T] => {
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const test: Employee = {
  id: 1,
  name: 'test',
  department: 'TestDep',
  role: 'Engineer',
};

const emp1 = getProperty(test, 'id');
const emp2 = getProperty(test, 'name');
