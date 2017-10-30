import React from 'react'

class BookList extends React.Component {


    state = {
        shelf: ''
    }

    changeBookShelf(value) {

        this.setState({shelf: value})
    }

    render() {
        const {shelf} = this.state;
        const {imageLinks} = this.props;
        const {thumbnail} = imageLinks;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${thumbnail}")`
                        }}></div>
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={(event)=>this.changeBookShelf(event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.authors}</div>
                </div>
            </li>
        )
    }
}

export default BookList