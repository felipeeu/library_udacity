import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Search } from "pages";

const Routes = (props, { childProps }) => {
  return (
    <Switch>
      <Route
        path="/search"
        render={() => <Search {...props} />}
        props={childProps}
      />
      <Route
        path="/"
        exact
        render={() => <Home {...props} />}
        props={childProps}
      />
    </Switch>
  );
};

export { Routes };
