import React from 'react'
import BookList from './BookList'


class Search extends React.Component {

    state = {
        books: [],
        query: '',
        currentQuery: false
    }

    updateQuery(query) {
        this.setState({
            query: query,
            currentQuery: true
        })
    }

    render() {
        const {books} = this.state

        return (<div className="search-books">
            <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</a>
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
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <BookList
                                id={book.id}
                                shelf={book.shelf}
                                authors={book.authors}
                                title={book.title}
                                imagelinks={book.imageLinks}
                            />
                        </li>))}

                </ol>
            </div>
        </div>)
    }
}

export default Search