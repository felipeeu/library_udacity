import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

const shelves = [
    {
        shelf: 'currentlyReading',
        name: 'Currently Read'
    },
    {
        shelf: 'wantToRead',
        name: 'Want to Read'
    },
    {
        shelf: 'read',
        name: 'Read'
    }];

function BookShelf(props) {
    const {books, changeBookShelf} = props;
    return (
        <div className="list-books-content">
            <div>
                {shelves.map(bookshelf => (
                    <div key={bookshelf.shelf} className="bookshelf">
                        <h2 className="bookshelf-title">{bookshelf.name}</h2>
                        <div className="bookshelf-books">
                            <BookList
                                books={
                                    books.filter(
                                        book => book.shelf === bookshelf.shelf
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
    changeBookShelf: PropTypes.func.isRequired,
    shelves: PropTypes.object.isRequired
}
export default BookShelf