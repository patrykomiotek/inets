/**
 * Zadeklaruj zmienną user z właściwościami username, email i isAdmin.
 * Użyj typeof, aby utworzyć typ UserType na podstawie zmiennej user.
 * Napisz funkcję printUserInfo, która przyjmuje parametr typu UserType i wypisuje informacje o użytkowniku na konsolę.
 *
 */
const user = {
  username: 'test',
  email: 'test@test.com',
  isAdmin: true,
};

type UserType = typeof user;

const printUserInfo = (user: UserType) => {
  console.log(user);
};
