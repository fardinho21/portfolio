import React, { useState } from 'react';
import NavBar from "./NavBar";
import Picture from "./Picture";
import "./Header.css";
import headshot_image from "../media/0.jpeg"

const Header = (props) => {

    return (
        <div className="Header Header-Pattern">

            <Picture image={headshot_image} top="100px" border="inset 25px green" width="300px" height="300px" margin="0" />
            <NavBar buttonText={["Home", "About Me", "Resume", "Projects", "Freelance"]}></NavBar>

            {/* TODO: Sidebar component */}
        </div>
    )
}

export default Header;