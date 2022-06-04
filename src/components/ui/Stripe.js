import React from "react";
import "./Stripe.css";
const Stripe = props => {
    return (
        <div className="Stripe" style={{
            transform: `rotate(${props.slant})`,
            top: `${props.top}%`, 
            right: `${props.right}%`,
            background: props.color}}>
                <h1 style={{transform: `rotate(calc(-1*${props.slant}))`}}>
                    {props.children}
                </h1>
        </div>
    )
}
export default Stripe; 