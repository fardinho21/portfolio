import React from "react";
import "./ContactFormModal.css";
import Card from "./ui/Card";


const ModalOverlay = () => {
    return <div className="ModalOverlay"></div>
}

const ContactFormModal = props => {
    return (
        <div className="wrapper">
            <ModalOverlay/>
            <div className="card-wrapper">
                <Card>{props.children}</Card>
            </div>
        </div>
    )
}

export default ContactFormModal;