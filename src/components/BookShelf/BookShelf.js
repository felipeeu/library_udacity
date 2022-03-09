import React from "react";
import { BookList } from "components";
import {
  BOOK_WANTED_TO_READ,
  BOOK_CURRENTLY_READING,
  BOOK_READED,
} from "utils/constants";

const shelvesMap = [
  {
    shelf: [BOOK_CURRENTLY_READING],
    name: "Currently Read",
    id: 1,
  },
  {
    shelf: [BOOK_WANTED_TO_READ],
    name: "Want to Read",
    id: 2,
  },
  {
    shelf: [BOOK_READED],
    name: "Read",
    id: 3,
  },
];

const BookShelf = (props) => {
  const { bookData, shelves } = props;
  return (
    <div className="list-books-content">
      <div>
        {shelvesMap.map((bookShelf) => {
          const shelfName = bookShelf.shelf;
          const idArray = shelves[shelfName];

          return (
            <div key={bookShelf.id} className="bookshelf">
              <h2 className="bookshelf-title">{bookShelf.name}</h2>
              <div className="bookshelf-books">
                <BookList
                  books={
                    bookData &&
                    bookData.filter(
                      (book) => idArray && idArray.find((id) => id === book.id)
                    )
                  }
                  {...props}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { BookShelf };
