import React from "react";
import "./Projects.css";
import project_image from "../../media/arpgen.png"

const Projects = () => {
    return (
        <div className="ArpGen">

            <a id="arpgen" href="https://arpgen.servehttp.com:8443">
                <img src={project_image} alt="arpeggio"  >
                </img>
            </a>
        </div>
    )
}

export default Projects;