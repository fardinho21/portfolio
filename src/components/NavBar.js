import React from "react";
import Button from "./ui/Button";
import "./NavBar.css";

const NavBar = props => {
    return <div className="NavBar">
        {props.buttonText.map((text,index) => <Button 
        key={index} 
        color="white"
        >{text}</Button>)}</div>
}


export default NavBar;