import React from "react";
// import * as BooksAPI from "connectors/BooksAPI";
import { Book } from "components/BookList/subcomponents";

// import {
//   BOOK_WANTED_TO_READ,
//   BOOK_CURRENTLY_READING,
//   BOOK_READED,
// } from "utils/constants";

const BookList = (props) => {
  const { books } = props;
  // const changeBookShelf = useCallback(
  //   (book, shelf) => {
  //     BooksAPI.update(book, shelf)
  //       .then((data) =>
  //         setShelves({
  //           [BOOK_CURRENTLY_READING]: data[BOOK_CURRENTLY_READING],
  //           [BOOK_WANTED_TO_READ]: data[BOOK_WANTED_TO_READ],
  //           [BOOK_READED]: data[BOOK_READED],
  //         })
  //       )
  //       .catch((err) => console.error(err));
  //   },
  //   [shelves]
  // );
  return (
    <ol className="books-grid">
      {books && books.map((book) => <Book key={book.id} book={book} />)}
    </ol>
  );
};

export { BookList };
