import React, { useCallback, useState } from "react";
import * as BooksAPI from "connectors/BooksAPI";
import { Link } from "react-router-dom";

import { Book, NotFound } from "components/BookList/subcomponents";

const Search = (props) => {
  const [books, setBooks] = useState([]);
  const [queryState, setQueryState] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const searchBooks = (query, maxResults) => {
    BooksAPI.search(query, maxResults)
      .then((booksQueried) => {
        booksQueried ? setBooks([...booksQueried]) : setBooks([]);
        setIsSearching(false);
      })
      .catch((error) => alert("only letters"));
  };
  console.log(isSearching);
  const updateQuery = useCallback(
    (query) => {
      const trimmedQuery = query.trim();

      if (trimmedQuery) {
        searchBooks(trimmedQuery, 20);
      } else {
        setBooks([]);
      }
      setIsSearching(true);
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
        <ol className="books-grid">
          {!isSearching ? (
            books.map((book) => (
              <Book
                key={book.id}
                book={book}
                noneShelfDisabled={true}
                {...props}
              />
            ))
          ) : (
            <NotFound query={queryState} isSearching={isSearching} />
          )}
        </ol>
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

export { Search };
