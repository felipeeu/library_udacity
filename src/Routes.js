import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Search } from "pages";

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/search" render={() => <Search {...props} />} />
      <Route path="/" exact render={() => <Home {...props} />} />
    </Switch>
  );
};

export { Routes };
