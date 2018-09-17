import React from "react"
import BookShelf from "./BookShelf";

const Home = (props) => {

    return (
        <div>
            <BookShelf {...props}/>
        </div>
    )
};

export default Home;
