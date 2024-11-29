type NonNullableProperties<T> = {
  [K in keyof T]: T[K] extends null | undefined ? never : T[K];
};

type UserDto = {
  id: number;
  email?: string; // string | undefined
  name: string;
  isAdmin: boolean;
};

type NonNullableUser = NonNullableProperties<UserDto>;
// const user: NonNullableUser = {
//   email
// }

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type UserGetters = Getters<UserDto>;

type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

type UserWithStringAndOptionalProperties = PickByType<
  UserDto,
  string | undefined
>;
type UserWithStringProperties = PickByType<UserDto, string>;
type UserWithNumberProperties = PickByType<UserDto, number>;

// type A = string & number;

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type NestedUserDto = {
  id: number;
  email?: string; // string | undefined
  name: string;
  isAdmin: boolean;
  posts: [
    {
      id: number;
      title: string;
      comments: [
        {
          id: number;
          content: string;
        },
      ];
    },
  ];
};

type ReadonlyNestedUser = DeepReadonly<NestedUserDto>;

// Task: Create a mapped type ReadonlyExcept<T, K> that makes all properties of an object type readonly except for the specified keys.
type ReadonlyExcept<T, K extends keyof T> = {
  readonly [P in Exclude<keyof T, K>]: T[P];
} & {
  [P in K]: T[P];
};

// Example usage:
interface Task {
  title: string;
  completed: boolean;
  description: string;
}

type EditableTask = ReadonlyExcept<Task, 'completed'>;
// EditableTask is { readonly title: string; completed: boolean; }

// Create a utility type OmitKeys<T, K> that removes specified keys from an object type.
type OmitKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

// Example usage:
interface Product {
  id: number;
  name: string;
  price: number;
}

type ProductWithoutPrice = OmitKeys<Product, 'price'>; // { id: number; name: string; }
