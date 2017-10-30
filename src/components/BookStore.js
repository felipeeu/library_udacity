import React from 'react'

import BookShelf from "./BookShelf";

class BookStore extends React.Component {

    render() {
        const {books} = this.props
        return (

            <div className="list-books-content">
                <div>
                    <BookShelf
                        name="Currently Reading"
                        books={books && books.filter((book) => book.shelf === ('currentlyReading'))}
                    />
                </div>

                <div>
                    <BookShelf
                        name="Want to Read"
                        books={books && books.filter((book) => book.shelf === ('wantToRead'))}
                    />
                </div>

                <div>
                    <BookShelf
                        name="Read"
                        books={books && books.filter((book) => book.shelf === ('read'))}
                    />
                </div>

            </div>





        )
    }


}


export default BookStore
