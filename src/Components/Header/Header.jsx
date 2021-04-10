import React from "react";
import "./Header.css";
import * as constants from "../../Constants/Constants";

const Header = () => (
        <div className="header" role="banner">
            <div className="title">{constants.title}</div>
            <div className="text">{constants.Subtitle}</div>
            <div className="text">{constants.cta}</div>
        </div>
    );
    
export default Header;
