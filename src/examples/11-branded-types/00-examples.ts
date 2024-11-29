declare const brand: unique symbol;

type Brand<T, B> = T & { [brand]: B };
type Frac<T, B> = T & { [brand]?: B }; //

type MovieId = string & { readonly brand: unique symbol };

type Validated<T> = T & { readonly validated: unique symbol };

type MovieId2 = string & { readonly brand: unique symbol };

type UserId = Brand<string, 'UserId'>;
type UserId2 = Brand<string, 'UserId'>;

const userId: UserId = '123' as UserId;
const userId2: UserId2 = userId;

const movie = 'zxcv' as MovieId;
const movie2 = 'zxcv' as MovieId2;

// type MovieId2 = string & { readonly brand: unique symbol };

// type Brand<T, B> = T & { [brand]: B };
// type MovieId = string & { readonly brand: unique symbol };

// type UserId = Brand<string, 'UserId'>;
// type PostId = Brand<string, 'PostId'>;

function getUserById(id: UserId) {
  // Funkcja, która przyjmuje tylko UserId
}

// type ValidatedEmail = Brand<string, 'ValidatedEmail'>;
// type ValidatedPassword = Brand<string, 'ValidatedPassword'>;
type ValidatedEmail = Validated<string>;
type ValidatedPassword = Validated<string>;

// function isMovieId(arg: MovieId | UserId): arg is MovieId {
//   return typeof arg === "string";
// }

// type PositiveNumber = number & Brand<'PositiveNumber'>;
// function isPositiveNumber(value: any): value is PositiveNumber {
//   return typeof value === 'number' && value > 0;
// }

function validate(email: string, password: string) {
  if (true !== true) {
    throw new Error('Invalid');
  }

  // const validatedEmail = password as ValidatedEmail;
  // const validatedPassword = password as ValidatedPassword;

  return {
    email: email as ValidatedEmail,
    password: password as ValidatedPassword,
  };
}

const validationResult = validate('janusz@wp.pl', 'admin1');
// step 1
// step 2
// step 3

function cancelUserSubscription(email: ValidatedEmail) {
  // remove user
}

const userEmail = 'kowalski@wp.pl';

cancelUserSubscription(validationResult.email);

const userId = 'abc' as UserId;
const postId = '456' as PostId;

getUserById(userId); // Poprawne
getUserById(postId); // Błąd - postId nie jest typu UserId
