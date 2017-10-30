import React from 'react'

import BookList from './BookList'

class BookShelf extends React.Component {

    render() {
        const {books} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books && books.map(book =>
                            <li key={book.id}>
                                <BookList
                                    bookid={book.id}
                                    booktitle={book.title}
                                    bookshelf={book.shelf}
                                    imageLinks={book.imageLinks}
                                />
                            </li>
                        )}
                    </ol>
                </div>

            </div>
        )
    }


}


export default BookShelf