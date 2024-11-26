/** Utwórz obiekt book z właściwościami title, author i pages.
 * Użyj typeof, aby utworzyć typ BookType na podstawie obiektu book.
 * Użyj keyof, aby utworzyć typ BookKeys, który reprezentuje klucze typu BookType.
 * Zaimplementuj funkcję getBookDetail, która przyjmuje obiekt typu BookType i klucz typu BookKeys, a następnie zwraca odpowiednią wartość.
 */
const book = {
  title: 'Test',
  author: 'Ja',
  pages: 23,
};

type BookType = typeof book;
type BookKeys = keyof BookType;

const getBookDetail = (book: BookType, key: BookKeys) => {
  return book[key];
};
