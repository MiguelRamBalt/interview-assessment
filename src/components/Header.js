import React from "react";

export const Header = (props) => {
    return (
        <div id="home" className="header">
            <div className="page-title">{props.title}</div>
        </div>
    );
};

export default Header;