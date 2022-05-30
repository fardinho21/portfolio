import React from "react";
import "./Background.css";
import video1 from '../Videos/background-lc.mp4';
import video2 from '../Videos/background-pt.mp4';
const Background = () => {
    return (
        <div className="Background">
            <div className="overlay-left fill">        

            </div>
            <div className="overlay-right fill">

            </div>
            <video autoPlay muted loop className="portrait" src={video2}>
                
            </video>
            <video autoPlay muted loop className="landscape" src={video1}>
            
            </video>
        </div>
    ); 
}

export default Background;