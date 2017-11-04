import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

//Components
import Search from './components/Search'
import BookShelf from "./components/BookShelf";

class BooksApp extends React.Component {

    state = {
        books: []
    }
    //Get books from API then set books to new state
    getAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }
    // Invoke getAllBooks after component is mounted
    componentDidMount = () => this.getAllBooks()

    //Change the shelf based on select on BookList component then calls getAllBooks and sets book state
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
                        <h1>Felipe's Books</h1>
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
