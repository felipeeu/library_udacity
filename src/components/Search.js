import React from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//Component
import BookList from "./BookList";
import BookShelf from "./BookShelf";

class Search extends React.Component {
  state = {
    books: [],
    query: ""
  };

  updateQuery = query => {
    const { books } = this.state;
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      // Has a query ?
      BooksAPI.search(trimmedQuery, 20).then(booksqueried => {
        booksqueried && booksqueried.length > 0
          ? this.setState({ books: booksqueried })
          : this.setState({ books: [] });
      });
      this.setState({ books });
    } else {
      // If there isn't a query ...
      this.setState({ books: [] });
    }
    this.setState({ query });
  };

  render() {
    const { books } = this.state;
    const { changeBookShelf } = this.props;
    //The shelves of the search result may be the current shelf
    books.map(book => {
      const bookFromShelf = this.props.books.find(
        shelfBook => shelfBook.id === book.id
      );

      // if a book is at a shelf , it is showed in the select tag , else shelf is none
      book.shelf = bookFromShelf !== undefined ? bookFromShelf.shelf : "none";

      return book;
    });

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList books={books} changeBookShelf={changeBookShelf} />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired
};
export default Search;
