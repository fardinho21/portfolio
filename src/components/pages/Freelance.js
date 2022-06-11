import React from "react";
import "./Freelance.css";
import Card from "../ui/Card";
import ButtonModal from "../ui/ButtonModal";
import fiverIcon from "../../media/fi.png" ;
import Picture from "../Picture";



const Freelance = props => {
    
    return (
        <Card>
            <div className="Freelance">
                <div className="fiver">
                    {/*TODO: Clicking fivver icon should open my fivver page */}
                    <Picture image={fiverIcon} width="300px" height="300px"></Picture>
                    <p>
                        Visit my Fiverr page!
                    </p>
                </div>
                <hr></hr>
                <div className="contact">
                    {/* TODO: contact form modal does not display on button click */}
                    <ButtonModal color="white" onClick={props.onShowContactFrom}>Contact</ButtonModal>
                    <p>
                        Like my work? Fill out the contact form!
                    </p>
                </div>
            </div>
        </Card>
    )
}

export default Freelance;