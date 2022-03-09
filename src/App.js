import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Routes } from "Routes";
import * as BooksAPI from "connectors/BooksAPI";
import {
  BOOK_WANTED_TO_READ,
  BOOK_CURRENTLY_READING,
  BOOK_READED,
} from "utils/constants";
import { filterBooksByShelves } from "utils/helpers/books";

const App = () => {
  const [bookData, setbookData] = useState();
  const [shelves, setShelves] = useState({
    [BOOK_CURRENTLY_READING]: [],
    [BOOK_WANTED_TO_READ]: [],
    [BOOK_READED]: [],
  });
  const changeBookShelf = useCallback(
    (book, shelf) => {
      BooksAPI.update(book, shelf)
        .then((data) =>
          setShelves({
            [BOOK_CURRENTLY_READING]: data[BOOK_CURRENTLY_READING],
            [BOOK_WANTED_TO_READ]: data[BOOK_WANTED_TO_READ],
            [BOOK_READED]: data[BOOK_READED],
          })
        )
        .catch((err) => console.error(err));
    },
    [shelves]
  );

  const getAllBooks = useCallback(() => {
    BooksAPI.getAll()
      .then((response) => {
        setbookData(response);
        setShelves({
          [BOOK_CURRENTLY_READING]: filterBooksByShelves(
            response,
            BOOK_CURRENTLY_READING
          ),
          [BOOK_WANTED_TO_READ]: filterBooksByShelves(
            response,
            BOOK_WANTED_TO_READ
          ),
          [BOOK_READED]: filterBooksByShelves(response, BOOK_READED),
        });
      })
      .catch((err) => err);
  }, [bookData]);

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="app">
      <Routes
        changeBookShelf={changeBookShelf}
        bookData={bookData}
        shelves={shelves}
        setShelves={setShelves}
      />
    </div>
  );
};

export default App;
