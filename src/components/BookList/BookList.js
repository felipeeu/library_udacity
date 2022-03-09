import React from "react";
import { Book } from "components/BookList/subcomponents";

const BookList = (props) => {
  const { books } = props;

  return (
    <ol className="books-grid">
      {books && books.map((book) => <Book key={book.id} book={book} />)}
    </ol>
  );
};

export { BookList };
