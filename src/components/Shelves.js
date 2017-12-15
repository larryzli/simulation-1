import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import { Link } from "react-router-dom";

export default class Shelves extends Component {
    render() {
        return (
            <div className="App">
                <HomeHeader />
                <div className="shelf-container">
                    <Link className="shelf-box" to="/bins/A">
                        Shelf A
                    </Link>
                    <Link className="shelf-box" to="/bins/B">
                        Shelf B
                    </Link>
                    <Link className="shelf-box" to="/bins/C">
                        Shelf C
                    </Link>
                    <Link className="shelf-box" to="/bins/D">
                        Shelf D
                    </Link>
                </div>
            </div>
        );
    }
}
