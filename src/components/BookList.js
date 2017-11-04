import React from 'react'
import PropTypes from 'prop-types'

const BookList = (props) => {
    const {books, changeBookShelf} = props;
    return (
        <ol className="books-grid">
            {books.map(book =>
                (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : book }")`
                                }}/>
                                <div className="book-shelf-changer">
                                    <select value={book.shelf}
                                            onChange={(event) => (changeBookShelf(book, event.target.value))}>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </li> ))}
        </ol>
    )


}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
}

export default BookList