import React from "react";
import "./Freelance.css";
import Card from "../ui/Card";
import ButtonModal from "../ui/ButtonModal";


const Freelance = props => {

    return (
        <Card>
            <div className="Freelance">
                <div className="contact">
                    <ButtonModal color="white" onShowContactForm={props.onShowContactForm}>Contact</ButtonModal>
                    <p>
                        Like my work? Fill out the contact form!
                    </p>
                </div>
            </div>
        </Card>
    )
}

export default Freelance;