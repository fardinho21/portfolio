import React, { useState } from 'react';
import Button from "./ui/Button";
import "./NavBar.css";

const NavBar = props => {

    const [selectedPage, setSelectedPage] = useState("Home");

    return <div className="NavBar" id={props.orientation}>
        {props.buttonText.map((text, index) => <Button
            setSelectedPage={setSelectedPage}
            key={index}
            color={text === selectedPage ? "black" : "white"}
            background={text === selectedPage ? "white" : "linear-gradient(rgb(21, 46, 40),rgb(56, 119, 104))"}
        >{text}</Button>)}</div>
}


export default NavBar;