import React from "react";
import "./Button.css";

const ButtonModal  = props => {
    return (
        <div className="Button" onClick={props.onClick} style={{
            color: `${props.color}`,
            background: `${props.background}`
        }}>
            {props.children}
        </div>
    )
}

export default ButtonModal;