export const filterBooksByShelves = (books, shelf) =>
  books && books.filter((book) => book.shelf === shelf).map((item) => item.id);
