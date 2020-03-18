import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Link } from "react-router-dom";
import Routes from "./Routes";

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: {}
  };
  //Get books from API then set books to new state

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      this.setState({
        shelves: {
          currentlyReading:
            this.state.books &&
            this.state.books
              .filter(book => book.shelf === "currentlyReading")
              .map(item => item.id),
          wantToRead:
            this.state.books &&
            this.state.books
              .filter(book => book.shelf === "wantToRead")
              .map(item => item.id),
          read:
            this.state.books &&
            this.state.books
              .filter(book => book.shelf === "read")
              .map(item => item.id)
        }
      });
    });
  };
  // Invoke getAllBooks after component is mounted

  componentDidMount = () => this.getAllBooks();

  //Update the shelves
  componentDidUpdate(prevProps, prevState) {
    if (this.state.shelves !== prevState.shelves) {
      return this.getAllBooks();
    }
  }

  //Change the shelf based on select on BookList component then calls getAllBooks and sets book state

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data =>
      this.setState({
        shelves: {
          currentlyReading: data && data.currentlyReading,
          wantToRead: data && data.wantToRead,
          read: data && data.read
        }
      })
    );
  };

  render() {
    const { books, shelves } = this.state;

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>Felipe's Books</h1>
          </div>
          <Routes
            books={books}
            changeBookShelf={this.changeBookShelf}
            shelf={shelves}
          />
          <div className="open-search">
            <Link to="/search"> Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp;
