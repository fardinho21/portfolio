import React from "react";
import NavBar from "./NavBar";
import Picture from "./Picture";
import "./Header.css";

const Header = () => {
    return (
        <div className="Header">

            <Picture></Picture>
            <NavBar buttonText={["Home", "About Me", "Resume", "Portfolio", "Freelance"]}></NavBar>

            {/* TODO: Sidebar component */}
        </div>
    )
}

export default Header;