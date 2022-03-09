import React, { Fragment } from "react";
import { BookShelf } from "components";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Fragment>
      <div className="list-books-title">
        <h1>Felipe's Books</h1>
      </div>
      <BookShelf {...props} />
      <div className="open-search">
        <Link to="/search" />
      </div>
    </Fragment>
  );
};

export { Home };
