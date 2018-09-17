import React from "react"
import {Switch, Route} from "react-router-dom"
//components
import Home from "./components/Home"
import Search from "./components/Search";


const Routes = (props, {childProps}) => {

    return (
        <Switch>
            <Route path="/search"
                   render={ ()=> <Search {...props}  />} props={childProps}/>
            <Route path="/" exact
                   render={() => <Home {...props} />} props={childProps}/>
        </Switch>
    )
};

export default Routes;