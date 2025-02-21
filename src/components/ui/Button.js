import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = props => {

    const onButtonClick = () => {
        console.log(typeof (props.children))
        props.setSelectedPage(props.children);
    }

    return (
        <Link style={{ textDecoration: "none" }} to={`${props.children}`}>
            <div className="Button" style={{
                color: `${props.color}`,
                background: `${props.background}`
            }}
                onClick={onButtonClick}
            >{props.children}</div>
        </Link >
    )
}


export default Button;