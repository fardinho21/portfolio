import React from "react";
import "./Background.css";
import video2 from '../media/background-pt.mp4';
const Background = () => {
    return (
        <div className="Background">
            <video autoPlay muted loop className="portrait" src={video2}>
                
            </video>
        </div>
    ); 
}

export default Background;