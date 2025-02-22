import React, { useState } from 'react';
import Button from "./ui/Button";
import { useLocation } from 'react-router-dom';
import "./NavBar.css";

const NavBar = props => {

    const location = useLocation();

    return <div className="NavBar" id={props.orientation}>
        {props.buttonText.map((text, index) => <Button
            key={index}
            color={location.pathname.includes(text.split(" ")[0]) ? "black" : "white"}
            background={location.pathname.includes(text.split(" ")[0]) ? "white" : "linear-gradient(rgb(21, 46, 40),rgb(56, 119, 104))"}
        >{text}</Button>)}</div>
}


export default NavBar;