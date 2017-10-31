import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

const shelves = ['currentlyReading', 'wantToRead', 'read'];

function BookShelf(props) {

    const {books, changeBookShelf} = props;
    return (

        <div className="list-books-content">
            <div>
                {shelves.map(bookshelf => (
                    <div key={bookshelf} className="bookshelf">
                        <h2 className="bookshelf-title">{bookshelf}</h2>
                        <div className="bookshelf-books">

                            <BookList
                                books={
                                    books.filter(
                                        book => book.shelf === bookshelf
                                    )}
                                changeBookShelf={changeBookShelf}
                            />

                        </div>

                    </div>
                ))}
            </div>
        </div>

    )

}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
}

export default BookShelf