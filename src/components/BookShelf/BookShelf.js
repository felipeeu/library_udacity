import React from "react";
import PropTypes from "prop-types";
//Component
import { BookList } from "components";

//list shelf with its shelf names
const shelves = [
  {
    shelf: "currentlyReading",
    name: "Currently Read",
    id: 1,
  },
  {
    shelf: "wantToRead",
    name: "Want to Read",
    id: 2,
  },
  {
    shelf: "read",
    name: "Read",
    id: 3,
  },
];

const BookShelf = (props) => {
  const { books, changeBookShelf, shelf } = props;
  console.log("PROPS BOOKSHElf: ", props);
  return (
    <div className="list-books-content">
      <div>
        {shelves &&
          shelves.map((bookshelf) => {
            const shelfName = bookshelf.shelf;
            const idArray = shelf[shelfName];

            return (
              <div key={bookshelf.id} className="bookshelf">
                <h2 className="bookshelf-title">{bookshelf.name}</h2>
                <div className="bookshelf-books">
                  <BookList
                    books={
                      books &&
                      books.filter(
                        (book) =>
                          idArray && idArray.find((id) => id === book.id)
                      )
                    }
                    changeBookShelf={changeBookShelf}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
  shelves: PropTypes.array,
};
export { BookShelf };
