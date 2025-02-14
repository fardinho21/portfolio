import React from "react";
import "./ContactFormModal.css";
import Card from "./ui/Card";


const ModalOverlay = (props) => {
    return <div className="ModalOverlay" onClick={props.onClick} ></div>
}

const ContactFormModal = props => {
    return (
        <div className="wrapper">
            <ModalOverlay onClick={props.onShowContactForm} />
            <div className="card-wrapper">
                <Card>{props.children}</Card>
            </div>
        </div>
    )
}

export default ContactFormModal;