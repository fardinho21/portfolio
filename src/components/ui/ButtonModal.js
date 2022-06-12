import React from "react";
import "./Button.css";


const ButtonModal  = props => {


    const clicky = () => {
        console.log("clicky", props)
    }

    return (
        <div className="Button" onClick={props.onShowContactForm} style={{
            color: `${props.color}`,
            background: `${props.background}`
        }}>
            {props.children}
        </div>
    )
}

export default ButtonModal;