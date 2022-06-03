import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = props => {
    return (
        <Link to={`/${props.text}`}>
            <div className="Button" >{props.text}</div>
        </Link>
    )
}


export default Button;