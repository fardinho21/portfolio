import React from "react";
import Button from "./Button";
import "./NavBar.css";

const NavBar = props => {
    return <div className="NavBar">{props.buttonText.map((text,index) => <Button key={index} text={text}></Button>)}</div>
}


export default NavBar;