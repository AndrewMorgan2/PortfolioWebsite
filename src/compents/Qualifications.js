
import React, { useState } from 'react';
import arrow from '../img/arrow.png';
import arrowFlip from '../img/arrowFlip.png';

export default function OtherDisplay() {

    //only project visable straight away
    const [isDisplay, setIsDisplay] = useState(false);
    const [isDisplay2, setIsDisplay2] = useState(false);
    const [isDisplay3, setIsDisplay3] = useState(false);
    const [isDisplay4, setIsDisplay4] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        if (isDisplay == false) {
            setIsDisplay(true)
        } else {
            setIsDisplay(false)
        }
    }
    function handleClick2(e) {
        e.preventDefault();
        if (isDisplay2 == false) {
            setIsDisplay2(true)
        } else {
            setIsDisplay2(false)
        }
    }
    function handleClick3(e) {
        e.preventDefault();
        if (isDisplay3 == false) {
            setIsDisplay3(true)
        } else {
            setIsDisplay3(false)
        }
    }
    function handleClick4(e) {
        e.preventDefault();
        if (isDisplay4 == false) {
            setIsDisplay4(true)
        } else {
            setIsDisplay4(false)
        }
    }

    return (
        <div>
            <div>
                <h2 style={{ color: '#4483b6', fontSize: "3vmax" }}>
                    <b>Formal Education</b>
                </h2>
                <h3 style={{ color: 'white', fontSize: "1.5vmax" }}>
                    I have 10 GCSEs (4A*s, 5As and a B) and A Levels (A in maths, A in physics and B in chemistry).
                    I'm on my way to getting a masters in computer Science from the University of Bristol.
                </h3>
            </div>

            <div>
                <h2 style={{ color: '#4483b6', fontSize: "3vmax" }}>
                    <b>Awards</b>
                </h2>
                <h3 style={{ color: 'white', fontSize: "1.5vmax" }}>
                    Duke of Edinburgh Sliver / Engineering Scholarship Scheme Wales Award / Life Guard Qualifications / Head Boy
                </h3>
            </div>

            <div>
                <h2 style={{ color: '#4483b6', fontSize: "3vmax" }}>
                    <b>University Grades</b>
                </h2>
                <div onClick={handleClick}>
                    <h3 style={{ color: 'white', fontSize: "1.5vmax", display: 'inline-flex' }}>
                        First Year Topics: averaging 67.2%
                    </h3>
                    {isDisplay &&
                        <img src={arrow} style={{ display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1vmax', marginLeft: '1vmax' }} />
                    }
                    {!isDisplay &&
                        <img src={arrowFlip} style={{ display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1vmax', marginLeft: '1vmax' }} />
                    }
                </div>
                {isDisplay &&
                    <h3 style={{ color: 'white', fontSize: "1.5vmax" }}>
                        <ul>
                            <li>Computer Architecture</li>
                            <li>Security 101</li>
                            <li>Imperative Programming</li>
                            <li>Functional Programming</li>
                            <li>Probability and Statistics</li>
                            <li>Mathematical Methods</li>
                            <li>Databases and Cloud Concepts</li>
                            <li>Theory of Computation</li>
                            <li>Object-Oriented Programming</li>
                            <li>Algorithms</li>
                        </ul>
                    </h3>
                }

                <div onClick={handleClick2}>
                    <h3 style={{ color: 'white', fontSize: "1.5vmax", display: 'inline-flex' }}>
                        Second Year Topics: averaging 67.75%
                    </h3>
                    {isDisplay2 &&
                        <img src={arrow} style={{ display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1vmax', marginLeft: '1vmax' }} />
                    }
                    {!isDisplay2 &&
                        <img src={arrowFlip} style={{ display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1vmax', marginLeft: '1vmax' }} />
                    }
                </div>
                {isDisplay2 &&
                    <h3 style={{ color: 'white', fontSize: "1.5vmax" }}>
                        <ul>
                            <li>Computer Systems A</li>
                            <li>Computer Systems B</li>
                            <li>Algorithms II</li>
                            <li>Software Engineering Project</li>
                            <li>Programming Languages and Computation</li>
                            <li>Mathematical Methods</li>
                            <li>Databases and Cloud Concepts</li>
                            <li>Data-Driven Computer Science</li>
                            <li>Interaction and Society</li>
                        </ul>
                    </h3>
                }

                <div onClick={handleClick3}>
                    <h3 style={{ color: 'white', fontSize: "1.5vmax", display: 'inline-flex' }}>
                        Third Year Topics: averaging 63.75%
                    </h3>
                    {isDisplay3 &&
                        <img src={arrow} style={{ display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1vmax', marginLeft: '1vmax' }} />
                    }
                    {!isDisplay3 &&
                        <img src={arrowFlip} style={{ display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1vmax', marginLeft: '1vmax' }} />
                    }
                </div>
                {isDisplay3 &&
                    <h3 style={{ color: 'white', fontSize: "1.5vmax" }}>
                        <ul>
                            <li>Machine Learning</li>
                            <li>Artificial Intelligence</li>
                            <li>Computational Neuroscience</li>
                            <li>Cryptology</li>
                            <li>Image Processing and Computer Vision</li>
                            <li>Advanced Computer Architecture</li>
                            <li>Team Project (Breached Game) </li>
                        </ul>
                    </h3>
                }

                <div onClick={handleClick4}>
                    <h3 style={{ color: 'white', fontSize: "1.5vmax", display: 'inline-flex' }}>
                        Four Year Topics: averaging TBD
                    </h3>
                    {isDisplay4 &&
                        <img src={arrow} style={{ display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1vmax', marginLeft: '1vmax' }} />
                    }
                    {!isDisplay4 &&
                        <img src={arrowFlip} style={{ display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1vmax', marginLeft: '1vmax' }} />
                    }
                </div>
                {isDisplay4 &&
                    <h3 style={{ color: 'white', fontSize: "1.5vmax" }}>
                        <ul>
                            <li>Internet Economics and Financial Technology</li>
                            <li>Advanced Topics in Programming Languages</li>
                            <li>Applied Deep Learning</li>
                            <li>Cloud Computing and Big Data</li>
                            <li>Systems and Software Security</li>
                            <li>CGI</li>
                            <li>Individual Project with Innovation Case</li>
                        </ul>
                    </h3>
                }
            </div>
            <div>
                <h2 style={{ color: '#4483b6', fontSize: "3vmax" }}>
                    <b>Contact</b>
                </h2>
                <h3 style={{ color: 'white', fontSize: "1.5vmax" }}>
                    Email: andrewdmorgan.2@gmail.com
                </h3>
            </div>
            <br />
        </div>
    );
}