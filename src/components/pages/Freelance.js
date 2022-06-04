import React from "react";
import "./Freelance.css";
import Card from "../ui/Card";
import Button from "../ui/Button";
import fiverIcon from "../../media/fi.png" ;
import Picture from "../Picture";

const Freelance = () => {
    return (
        <Card>
            <div className="Freelance">
                <div className="fiver">
                    {/* Clicking fivver icon should open my fivver page */}
                    <Picture image={fiverIcon} width="300px" height="300px"></Picture>
                    <p>
                        Visit my Fiverr page!
                    </p>
                </div>
                <hr></hr>
                <div className="contact">
                    {/* TODO: display email form on Contact button click */}
                    {/* TODO: Clicking contact button redirects to nonexistent page */}
                    <Button color="white">Contact</Button>
                    <p>
                        Like my work? Send in a contact form!
                    </p>
                </div>
            </div>
        </Card>
    )
}

export default Freelance;