import { v4 as uuidv4 } from 'uuid';

console.log(uuidv4());

const createUuidAndString = (suffix: string) => {
  return `${uuidv4()}-${suffix}`;
};

createUuidAndString(123);
createUuidAndString('sdfsd');
createUuidAndString(['a', 'b']);
