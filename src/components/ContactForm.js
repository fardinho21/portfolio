import React from "react";
import "./ContactForm.css";
import ContactFormModal from "./ContactFormModal";

const handleSubmit = event => {
    // TODO: Interface with backend
    event.preventDefault();
    console.log("Form submitted!")
}

const ContactForm = props => {
    return(
        <ContactFormModal>
            <div className="ContactForm">
                <h3>Contact Form</h3>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    {/* TODO: Sanitize input */}
                    {/* TODO: Form input validation */}
                    <label>First Name: </label>
                    <input type="text" placeholder="Enter your first name"></input>
                    <label>Last Name: </label>
                    <input type="text" placeholder="Enter your last name"></input>
                    <label>Email: </label>
                    <input type="email" placeholder="example@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></input>
                    <label>Affiliation or Occupation: </label>
                    <select>
                        <option value="none" selected disabled hidden>--</option>
                        <option value="associate">Associate</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="professional">Professional</option>
                        <option value="professor">Professor</option>
                        <option value="recruiter">Recruiter</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                    </select>
                    <label>Message: </label>
                    <textarea placeholder="[250 characters max]" maxLength="250"></textarea>
                    <hr></hr>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </ContactFormModal>
    )
}

export default ContactForm;