import React from "react";
import logo from "../assets/logo.png";
import "./DetailHeader.css";

const DetailHeader = props => {
    return (
        <div className="banner">
            <div>
                <img src={logo} alt="shelfie logo" />
                <span className="main-logo-text">
                    Shelf {props.shelfLetter}
                </span>
                <span className="main-logo-text">Bin {props.binNumber}</span>
            </div>
        </div>
    );
};

export default DetailHeader;
