import React from 'react'
import * as BooksAPI from '../BooksAPI'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
//Component
import BookList from "./BookList";


class Search extends React.Component {

    state = {
        books: [],
        query: '',
        shelf: 'none'
    }

    updateQuery = (query) => {
        const {books, shelf} = this.state
        const trimmedQuery = query.trim()

        BooksAPI.search(trimmedQuery, 20).then((booksqueried) => {
            booksqueried && booksqueried.length > 0 ? this.setState({books: booksqueried}) : this.setState({books: []})
        })
        //Set select to shelf none
        books.map((book => book.shelf === shelf))

        this.setState({query: query})
    }

    render() {
        const {books, shelf} = this.state;
        const {changeBookShelf} = this.props;
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
                    <BookList books={books} changeBookShelf={changeBookShelf} shelf={shelf}/>
                </div>
            </div>)
    }
}

Search.propTypes = {
    books: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
}
export default Search