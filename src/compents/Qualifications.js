import React from 'react';

export default class OtherDisplay extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <h2 style={{color : '#4483b6', fontSize : "3vmax"}}>
                        <b>Formal Education</b>
                    </h2>
                    <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                    I have 10 GCSEs (4A*s, 5As and a B) and A Levels (A in maths, A in physics and B in chemistry). 
                    </h3>
                </div>

                <div>
                    <h2 style={{color : '#4483b6', fontSize : "3vmax"}}>
                        <b>Awards</b>
                    </h2>
                    <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                    Duke of Edinburgh Sliver / Engineering Scholarship Scheme Wales Award / Life Guard Qualifications / Head Boy
                    </h3>
                </div>

                <div>
                    <h2 style={{color : '#4483b6', fontSize : "3vmax"}}>
                        <b>University Grades</b>
                    </h2>
                    <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                    <b style={{fontSize : "2vmax"}}>First Year Topics: </b>
                        Computer Architecture, Security 101, Imperative Programming,
                        Functional Programming, Probability and Statistics, Mathematical Methods,
                        Databases and Cloud Concepts, Theory of Computation, Object-Oriented
                        Programming, Algorithms - <b>averaging 67.2%</b>
                    </h3> 
                    <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                    <b style={{fontSize : "2vmax"}}>Second Year Topics: </b>
                        Computer Systems A, Computer Systems B, Algorithms II, Software Engineering Project,
                        Programming Languages and Computation, Data-Driven Computer Science,
                        Interaction and Society - <b>averaging 67.75%</b>
                    </h3>
                    <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                    <b style={{fontSize : "2vmax"}}>Third Year Topics: </b>
                        Machine Learning, Artificial Intelligence, Computational Neuroscience, Cryptology, 
                        Image Processing and Computer Vision, Advanced Computer Architecture, 
                        Team Project (Breached Game) - <b>averaging 63.75%</b>
                    </h3>
                    <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                    <b style={{fontSize : "2vmax"}}>Fourth Year Topics: </b>
                        Internet Economics and Financial Technology, Advanced Topics in Programming Languages 
                        Applied Deep Learning, 	Cloud Computing and Big Data, Systems and Software Security 
                        CGI, Individual Project with Innovation Case - <b>averaging TBD</b>
                    </h3>
                </div>
                <div>
                <h2 style={{color : '#4483b6', fontSize : "3vmax"}}>
                        <b>Contact</b>
                    </h2>
                    <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                    Email: andrewdmorgan.2@gmail.com
                    </h3>
                </div>
                <br/>
            </div>
        );
    }
}