import React from "react";
import "./Resume.css";

const Resume = () => {
    return (    
        <div className="Resume-Wrapper">
            <main>
                <header>
                    <h1>Hojat Fardin</h1>
                    <p>(734)- 582 - 3748 | 6501 Yale St, Westland MI, 48185 | fardinhojat8@gmail.com </p>
                </header>

                <article className="resume">
                    <h2 className="goal">Goal</h2>
                    <section>
                        I want to improve my technical skills in order to become an industry-ready software engineer.
                    </section>
                </article>
                <h2>Education</h2>
                <article className="resume">

                    <section className="dates" >
                        <div style={{gridTemplateRows: "50% 50%"}}>
                            <p>Aug. 2017 - May 2020</p>
                            <p>Aug. 2015 - Apr. 2017</p>
                        </div>
                    </section>
                    <section className="description">
                        <ul>
                            <li >
                                Michigan State University - Bachelor of Science: Computer Engineering

                                <p>
                                    Dean's List: Spring Semester 2019
                                </p>
                            </li>

                            <li>
                                Henry Ford College - Associate of Science: Pre-Engineering
                                <p>
                                    Dean's List: 2015 - 2017
                                </p>
                            </li>
                        </ul>
                    </section>

                </article>

                <h2>Work Experience</h2>
                <article className="resume">

                    <section className="dates">
                        <div style={{gridTemplateRows: "46% 54%"}}>
                            <p>Nov. 2021 - Present</p>
                            <p>Jun. 2019 - Nov. 2019</p>
                        </div>
                    </section>
                    <section className="description">
                        <ul>
                            <li >
                                Iconma LLC - Software Quality Operations Associate, supporting Waymo LLC

                                <p>
                                    Utilized Waymo's proprietary software tools and workflows to configure simulation frameworks for their self-driving car platforms.
                                </p>
                                <p>
                                    Consistently met production metrics
                                </p>
                                <p>
                                    Implemented UI automation scripts using Python to save time on varous workflows.
                                </p>
                            </li>

                            <li>
                                MSU - Biosystems and Agricultural Engineering, Undergraduate Research Intern.
                                <p>
                                    Worked with Dr. Renfu Lu and his research team in preparing an apple sorter machine for an in-field demonstration
                                </p>
                                <p>
                                    Programmed microcontrollers for control circuits
                                </p>
                                <p>
                                    Trobleshooted sesor and relay circuits
                                </p>
                                <p>
                                    Reorganized the lab space
                                </p>
                            </li>
                        </ul>
                    </section>

                </article>

                <h2>Skills and Knowledge</h2>
                <article className="resume">

                    <section className="dates">
                        {/* This was intentionally left blank */}
                    </section>
                    <section className="description">
                        <ul >
                            <p>Software Development, Design Patterns, and Debugging</p>
                            <p>Communication and Document Preparation</p>
                            <p>Web Development, Component-Based Design, Angular 8, Django, ReactJS</p>
                            <p>Python, C++, and Javscript</p>
                            <p>Web Scraping and Research</p>
                            <p>General knowledge of Computer Networks and Apppcation Architecture</p>
                        </ul>
                    </section>

                </article>

                <h2>Extracurriculars</h2>
                <article className="resume" style={{borderBottom: "5px solid black"}}>

                    <section className="dates">
                        <div style={{gridTemplateRows: "67% 33%"}}>
                            <p>Spring 2019 - Fall 2019</p>
                            <p>Jun. 2019 - Nov. 2019</p>
                        </div>
                    </section>
                    <section className="description">
                        <ul>
                            <li >
                                MSU - Strength Augmenting Robotic Exoskeleton - Software Sub-Team Leader

                                <p>
                                    Fulfilled the Software Sub-Team Leader Position
                                </p>
                                <p>
                                    Established software development workflows
                                </p>
                                <p>
                                    Applied the Waterfall Software Development Life-cycle to our projects
                                </p>
                                <p>
                                    Instructed team members on programming microcontrollers in C
                                </p>
                                <p>
                                    Developed a familiarity with embedded systems
                                </p>
                            </li>

                            <li>
                                Spartan Blockchain Solutions
                                <p>
                                    Researched blockchbain development frameworks
                                </p>
                                <p>
                                    Developed my knowledge base of blockchain and its industry applications
                                </p>
                            </li>
                        </ul>
                    </section>

                </article>
            </main>
        </div>
    )
}

export default Resume;