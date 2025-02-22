import React from "react";
import "./Home.css";
import Stripe from "../ui/Stripe";

// TODO: add media query to adjust layout of stripes in landscape mode
const Home = () => {
    return (
        <div className="Home">
            <Stripe slant="10deg" top="25" right="50" color="rgba(24, 69, 59, 0.8)"> OPEN TO WORK</Stripe>
            <Stripe slant="-10deg" top="50" right="50" color="rgba(255,255,255,0.6)">TECH SAVVY</Stripe>
        </div>
    )
}

export default Home;