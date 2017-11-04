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

    getAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    componentDidMount = () => this.getAllBooks()

    changeBookShelf = (book, shelf) => {

        BooksAPI.update(book, shelf).then(() => this.getAllBooks())

    }

    render() {
        const {books} = this.state;

        return (
            <div className="app">

                <Route path="/search" render={({history}) => (
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
