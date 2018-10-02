import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom';
import Routes from "./Routes";

class BooksApp extends React.Component {

    state = {
        books: []
    };
    //Get books from API then set books to new state

    getAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    };
    // Invoke getAllBooks after component is mounted

    componentDidMount = () => this.getAllBooks();

    //Change the shelf based on select on BookList component then calls getAllBooks and sets book state

    changeBookShelf = (book, shelf) => {

        BooksAPI.update(book, shelf)
    };

    render() {
        const {books} = this.state;

        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>Felipe's Books</h1>
                    </div>
                    <Routes books={books}
                            changeBookShelf={this.changeBookShelf}
                    />
                    <div className="open-search">
                        <Link to="/search"> Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksApp


