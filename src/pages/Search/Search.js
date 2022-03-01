import React, { useCallback, useState } from "react";
import * as BooksAPI from "connectors/BooksAPI";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BookList } from "components";
import propTypes from "prop-types";

const Search = ({ changeBookShelf }) => {
  const [books, setBooks] = useState([]);
  const [queryState, setQueryState] = useState();

  const searchBooks = (query, maxResults) => {
    BooksAPI.search(query, maxResults)
      .then((booksQueried) => {
        booksQueried ? setBooks(booksQueried) : setBooks([]);
      })
      .catch((error) => alert("only letters"));
  };

  const updateQuery = useCallback(
    (query) => {
      const parsedQuery = query.toString();
      const trimmedQuery = parsedQuery.trim();

      if (trimmedQuery) {
        searchBooks(query, 20);
      } else {
        setBooks([]);
      }
      setQueryState(trimmedQuery);
    },
    [books, queryState]
  );

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookList books={books} changeBookShelf={changeBookShelf} />
      </div>
    </div>
  );
};

// //The shelves of the search result may be the current shelf
// books.map((book) => {
//   const bookFromShelf = this.props.books.find(
//     (shelfBook) => shelfBook.id === book.id
//   );

//   // if a book is at a shelf , it is showed in the select tag , else shelf is none
//   book.shelf = bookFromShelf !== undefined ? bookFromShelf.shelf : "none";

//   return book;
// });

Search.propTypes = {
  query: PropTypes.string,
  books: PropTypes.array,
  changeBookShelf: PropTypes.func,
  updateQuery: propTypes.func,
};
export { Search };
