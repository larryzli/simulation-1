import React from "react";
import logo from "../assets/logo.png";
import "./BinsHeader.css";

const BinsHeader = props => {
    return (
        <div className="banner">
            <div>
                <img src={logo} alt="shelfie logo" />
                <span className="main-logo-text">
                    SHELF {props.shelfLetter}
                </span>
            </div>
        </div>
    );
};

export default BinsHeader;
