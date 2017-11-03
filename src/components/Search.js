import React from 'react'
import * as BooksAPI from '../BooksAPI'
import BookList from './BookList'
import {Link} from 'react-router-dom'


class Search extends React.Component {

    state = {
        books: [],
        query: ''
    }

    updateQuery(query) {
        BooksAPI.search(query).then(books => books ? this.setState({books}) : []);
        this.setState({query});
    }

    changeBookShelf(book, shelf) {

        BooksAPI.update(book, shelf).then(BooksAPI.getAll())
    }

    render() {
        const {books} = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author"
                               onChange={(event) => this.updateQuery(event.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <BookList
                        books={books}
                        changeBookShelf={this.changeBookShelf}
                    />
                </div>
            </div>)
    }
}

export default Search