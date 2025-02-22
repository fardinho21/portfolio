import React, { Fragment, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import "./MainContent.css";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const MainContent = props => {

    return (
        <div className="MainContent">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About%20Me" element={<AboutMe />} />
                <Route path="/Resume" element={<Resume />} />
                <Route path="/Projects" element={<Projects />} />
            </Routes>
        </div>
    )
}

export default MainContent; 