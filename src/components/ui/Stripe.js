import React from "react";
import "./Stripe.css";
const Stripe = props => {
    return (
        <div className="Stripe" style={{
            transform: `rotate(${props.slant})`,
            top: `${props.top}%`, 
            right: `${props.right}%`,
            background: props.color,
            opacity: props.opacity}}>
                <h1>
                    {props.children}
                </h1>
                {/* TODO: Center Stripe's text */}
        </div>
    )
}

export default Stripe;