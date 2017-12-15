import React from "react";
import logo from "../assets/logo.png";
import "./CreateHeader.css";

const CreateHeader = props => {
    return (
        <div className="banner">
            <div>
                <img src={logo} alt="shelfie logo" />
                <span className="main-logo-text">
                    Shelf {props.shelfLetter}
                </span>
                <span className="main-logo-text">
                    Add to Bin {props.binNumber}
                </span>
            </div>
        </div>
    );
};

export default CreateHeader;
