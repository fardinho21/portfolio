import React from "react";
import NavBar from "./NavBar";
import Picture from "./Picture";
import "./Header.css";

const Header = () => {
    return (
        <div className="wrapper">
            <div className="overlay">
                <div className="Header">
                    <div className="spacer"></div>
                    <NavBar buttonText={["Home", "About Me", "Resume", "Projects", "Freelance"]}></NavBar>
                </div>
            </div>
            
            <div className="quote">
                <div className="spacer"></div>
                <h2>
                    Resilliant | Skillful | Driven
                </h2>
            </div>
            <Picture></Picture>
            {/* TODO: Make sure picutre is not cut off when in landscape */}
            {/* TODO: Sidebar component */}
        </div>
    )
}

export default Header;