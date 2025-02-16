import React from "react";
import NavBar from "./NavBar";
import Picture from "./Picture";
import "./Header.css";

const Header = () => {

    const headshot = "http://cse.msu.edu/~fardinho/images/0.jpeg";

    return (
        <div className="Header Header-Pattern">

            <Picture image={headshot} top="100px" border="inset 25px green" width="300px" height="300px" margin="0" />
            <NavBar buttonText={["Home", "About Me", "Resume", "Projects"]}></NavBar>

            {/* TODO: Sidebar component */}
        </div>
    )
}

export default Header;