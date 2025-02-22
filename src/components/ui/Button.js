import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = props => {



    return (
        <Link style={{ textDecoration: "none" }} to={`${props.children}`}>
            <div className="Button" style={{
                color: `${props.color}`,
                background: `${props.background}`
            }}
            >{props.children}</div>
        </Link >
    )
}


export default Button;