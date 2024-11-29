import { Equal, Expect } from '../../../helpers/type-utils';

const returnWhatIPassIn = <T>(t: T) => {
  return t;
};

const one = returnWhatIPassIn(1);
const framework = returnWhatIPassIn('angular');

type tests = [
  Expect<Equal<typeof one, 1>>,
  Expect<Equal<typeof framework, 'angular'>>,
];
