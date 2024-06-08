import React, { useState } from "react";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const showMegaMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navbar">
            <div className="container">
                <h2 className="logo">
                    <a href="/">Fady</a>
                </h2>
                <ul>
                    <li>
                        <a href="#articles">Articles</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#features">Features</a>
                    </li>
                    <li>
                        <a onClick={showMegaMenu}>Other Links</a>
                    </li>
                </ul>
            </div>
            {showMenu && <MegaMenu />}
        </div>
    );
};

export default Navbar;
