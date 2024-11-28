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
