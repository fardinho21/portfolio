import React, {Fragment} from "react";
import { createPortal } from "react-dom";
import "./ContactFormModal.css";
import Card from "./ui/Card";

const portalElement = document.getElementById("modal-overlay");

const ModalOverlay = () => {
    return <div className="ModalOverlay"></div>
}

const ContactFormModal = props => {
    return (
        <Fragment>
            {createPortal(<ModalOverlay/>, portalElement)}
            {createPortal(<Card>{props.children}</Card>, portalElement)}
        </Fragment>
    )
}

export default ContactFormModal;