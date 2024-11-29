import { v4 as uuidv4 } from 'uuid';
import { logger } from '@org/utils';
import { type GreetParams, type Config1 } from './employees';
// import type { GreetParams } from './employees';
import { superBoss, superManager, NewCls } from './employees';
// storybook
// tests
// webpack / vite

// AuthContext ->
// type AuthContextType

// TGreetParams
// IGreetParams

// import tsconfig from '../../tsconfig.json';
// tsconfig.compilerOptions.paths

// console.log(uuidv4());

const createUuidAndString = (suffix: string) => {
  return `${uuidv4()}-${suffix}`;
};

createUuidAndString(123);
createUuidAndString('sdfsd');
createUuidAndString(['a', 'b']);

// console.log('This is console.log');
// logger.info('In uuid');
