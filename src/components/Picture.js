import React from "react";
import "./Picture.css";
const Picture = props => {
    return (
        <div className="Picture" style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "contain",
            border: `${props.border}`,
            top: `${props.top}`,
            width: `${props.width}`,
            height: `${props.height}`
        }}>

        </div>
    )
}

export default Picture;