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
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        books: [],
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
