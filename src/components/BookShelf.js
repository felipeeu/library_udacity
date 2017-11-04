import React from 'react'
import PropTypes from 'prop-types'
//Component
import BookList from './BookList'

//list shelf with its shelf names
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

const BookShelf = (props) => {
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
                                    //filter books by shelves
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
    shelves: PropTypes.array
}
export default BookShelf