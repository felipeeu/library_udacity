import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

//components
import Search from './components/Search'
import BookShelf from "./components/BookShelf";

class BooksApp extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books: books})
        })
    }

    changeBookShelf(book, shelf) {

        BooksAPI.update(book, shelf).then(BooksAPI.getAll())

    }

    render() {
        const {books} = this.state;

        return (
            <div className="app">

                <Route path="/search" render={() => (
                    <Search
                        books={books}
                        changeBookShelf={this.changeBookShelf}
                    />
                )}/>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <Route exact path="/" render={() => (
                        <BookShelf
                            books={books}
                            changeBookShelf={this.changeBookShelf}
                        />
                    )}/>
                    <div className="open-search">
                        <Link to="/search"> Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksApp
