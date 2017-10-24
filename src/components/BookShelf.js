import React from 'react'

import BookList from './BookList'

class BookShelf extends React.Component{

    render(){
        return(

            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <BookList/>
                    </ol>
                </div>

                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <BookList/>
                    </ol>
                </div>

                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <BookList/>
                    </ol>
                </div>
            </div>
        )
    }


}


export default BookShelf