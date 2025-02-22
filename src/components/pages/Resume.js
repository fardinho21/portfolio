import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="Resume-Wrapper">
            <main>
                <header>
                    <h1>Hojat Fardin</h1>
                    <p> Detroit Metropolitan Area </p>
                </header>

                <article className="resume">
                    <h2 className="goal">Goal</h2>
                    <section>
                        I strive to make impactful contributions for the teams I work for.
                    </section>
                </article>
                <h2>Education</h2>
                <article className="resume">

                    <section className="dates" >
                        <div style={{ gridTemplateRows: "50% 50%" }}>
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
                        <div style={{ gridTemplateRows: "40% 60%" }}>
                            <p>Aug. 2022 - Present</p>
                            <p>Nov. 2021 - Aug. 2022</p>
                        </div>
                    </section>
                    <section className="description">
                        <ul>
                            <li>
                                DCS Corporation - Software Engineer | Scrum Master | Test Engineer
                                <ul>
                                    <li id="role">
                                        Software Engineer
                                        <ul id="contribution">
                                            <li>
                                                <p>
                                                    Averaged 3000+ lines of code per 2-week sprints

                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Wrote python scripts and bash scripts to stream-line development and set-up workflows

                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Improved CICD pipeline by adding formatter and static analysis tools

                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Implemented service, clients, and abstract interfaces for a network middleware protocol
                                                </p>

                                            </li>

                                        </ul>
                                    </li>
                                    <li id="role">
                                        Test Engineer
                                        <ul id="contribution">
                                            <li>
                                                <p>
                                                    Integrated google-tests unit tests framework into our testing workflows and wrote unit tests for the code-base to identify bugs or deviations from software design
                                                </p>

                                            </li>
                                            <li>
                                                <p>
                                                    Serviced HIL test and integration events on platforms using our code
                                                </p>

                                            </li>
                                            <li>
                                                <p>
                                                    Expanded testing contexts
                                                </p>

                                            </li>
                                        </ul>
                                    </li>
                                    <li id="role">
                                        Scrum Master / Flow Manager
                                        <ul id="contribution">
                                            <li>
                                                <p>
                                                    Conducted Agile Ceremonies such as Sprint Stand-up, Sprint Review, Sprint Retrospective, Sprint Planning, and managed the Jira Board
                                                </p>

                                            </li>
                                            <li>
                                                <p>
                                                    Collected developer metrics to accurately measure and communicate team work capacity to interested stakeholders
                                                </p>

                                            </li>
                                            <li>
                                                <p>
                                                    Assisted developers in resolving technical and conceptual blockers to their Sprint Deliverabes
                                                </p>

                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li >
                                Iconma LLC - Software Quality Operations Associate, supporting Waymo LLC

                                <p>
                                    Utilized Waymo's proprietary software tools and workflows to configure simulation frameworks for their self-driving car platform.
                                </p>
                                <p>
                                    Consistently met production metrics
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
                        <ul style={{ listStylePosition: "outside" }}>
                            <p>Programming Languages: Python3.10 (7 years), C++11 (4 years), and ES6 Javascript (4 years)</p>
                            <p>Web Scraping: Python Scrapy and Node.js Playwright</p>
                            <p>Software Engineering and Development: Experience with Waterfall and Agile SDLC, from requirements gathering, planning, development and delivery</p>
                            <p>Full-Stack Development: MongoDB, Express.js, React.js, and Node.js (MERN stack)</p>
                            <p>Application Secuirty: Implementing TLS (Man-in-the-Middle countermeasure), input-validation and input-sanitization (XSS attack countermeasure), and session management via tokens</p>
                            <p>General knowledge of Computer Networks, System Administration, and Application Architecture</p>
                            <p>UI: responsive design using HTML and CSS Flexbox</p>
                            <p>Operating Systems: Ubuntu/Linux and Windows</p>
                            <p>Communication and Document Preparation</p>
                        </ul>
                    </section>

                </article>
            </main>
        </div>
    )
}

export default Resume;