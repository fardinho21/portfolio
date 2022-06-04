import React from "react";
import "./Background.css";
import video1 from '../Videos/background-lc.mp4';
import video2 from '../Videos/background-pt.mp4';
const Background = () => {
    return (
        <div className="Background">
            <video autoPlay muted loop className="portrait" src={video2}>
                
            </video>
        </div>
    ); 
}

export default Background;