import React from "react";
import { BookShelf } from "components";

const Home = (props) => {
  return (
    <div>
      <BookShelf {...props} />
    </div>
  );
};

export { Home };
