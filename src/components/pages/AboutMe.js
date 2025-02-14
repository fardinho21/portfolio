import React from "react";
import "./AboutMe.css";
import Card from "../ui/Card";
const AboutMe = () => {
    return (
        <Card>
            <p>
                I am a skilled software engineer and test engineer with experience in software development, quality assurance, and testing. My expertise includes writing and validating software deliverables, reviewing code to ensure compliance with coding standards, and overseeing the software development life cycle to maintain best practices.
                <br></br>
                <br></br>
                Beyond my technical expertise, I have a deep passion for building creative projects that merge software development with artistic expression. One of my most notable projects is a React.js-based arpeggio guitar tabulator that dynamically generates arpeggio patterns based on user-provided musical scales. By leveraging React’s component-based structure, I designed an intuitive interface where users can input a scale, and the application generates arpeggiated note sequences in tablature format. This project reflects my ability to combine algorithmic problem-solving with user-centric design while reinforcing my enthusiasm for software applications in music and the arts.
                <br></br>
                <br></br>
                In addition to development, I have a strong background in software testing and quality assurance. I have conducted hardware-in-loop tests to evaluate software performance on various platforms, written unit tests to verify the functionality of code against design specifications, and performed troubleshooting to identify and resolve software defects efficiently.
                <br></br>
                <br></br>
                With a detail-oriented approach and a commitment to delivering high-quality software, I strive to enhance software reliability and performance through rigorous testing and development processes. I am passionate about ensuring software meets industry standards and user expectations while also exploring innovative ways to apply technology to creative domains.
            </p>
        </Card>
    )
}

export default AboutMe;