import React from "react";
import logo from "../assets/logo.png";
import "./HomeHeader.css";

const HomeHeader = () => {
    return (
        <div className="banner">
            <div>
                <img src={logo} alt="shelfie logo" />
                <span className="main-logo-text">SHELFIE</span>
            </div>
        </div>
    );
};

export default HomeHeader;
