import React, { useState } from 'react';
import NavBar from "./NavBar";
import Picture from "./Picture";
import "./ui/Button.css";
import "./Header.css";
import headshot_image from "../media/0.jpeg"

const Header = (props) => {
    return (
        <div className="Header Header-Pattern">

            <Picture image={headshot_image} top="100px" border="inset 25px rgba(24, 69, 59, 0.8)" width="300px" height="300px" margin="0" />
            <NavBar buttonText={["Home", "About Me", "Resume", "Projects"]}></NavBar>

            <div className='ToggleSideBarButton Button' onClick={props.onSetShowSideBarButtonClick}>
                {"<<"}
            </div>
        </div>
    )
}

export default Header;