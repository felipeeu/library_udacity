import React, { useEffect, useState, useCallback } from "react";
import * as BooksAPI from "./connectors/BooksAPI";
import "./App.css";
import { Link } from "react-router-dom";
import { filterBooksByShelves } from "utils/helpers/books";
import { Routes } from "Routes";
import {
  BOOK_WANTED_TO_READ,
  BOOK_CURRENTLY_READING,
  BOOK_READED,
} from "./utils/constants";

const App = () => {
  const [bookData, setbookData] = useState();
  const [shelves, setShelves] = useState({
    [BOOK_CURRENTLY_READING]: [],
    [BOOK_WANTED_TO_READ]: [],
    [BOOK_READED]: [],
  });

  useEffect(() => {
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
  }, []);

  const changeBookShelf = useCallback(
    (book, shelf) => {
      console.log("Book:", book);
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

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>Felipe's Books</h1>
        </div>
        <Routes
          books={bookData}
          changeBookShelf={changeBookShelf}
          shelf={shelves}
        />
        <div className="open-search">
          <Link to="/search"> Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default App;
