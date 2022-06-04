import React from "react";
import "./Home.css";
import Stripe from "../ui/Stripe";


const Home = () => {
    return (
        <div className="Home">
            <Stripe slant="15deg" top="15" right="30" color="white" opacity="0.5"> HELLO WORLD</Stripe>
            <Stripe slant="-15deg" top="50" right="30" color="green" opacity="0.5">SUCK MY BALLS</Stripe>
        </div>
    )
}

export default Home;