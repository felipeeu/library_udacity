import React from "react";

const NotFound = ({ query, isSearching }) => {
  return (
    <div className="list-books-content">
      {query.length > 0 && isSearching ? (
        <h1> {`Searching for ${query}`}</h1>
      ) : (
        <h1>Please, type to search for you Book</h1>
      )}
    </div>
  );
};
export { NotFound };
