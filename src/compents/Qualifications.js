import React from 'react';

export default class OtherDisplay extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <h2 style={{color : '#3041cb', fontSize : "3vmax"}}>
                        <b>Formal Education</b>
                    </h2>
                    <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                    I have 10 GCSEs (4A*s, 5As and a B) and A Levels (A in maths, A in physics and B in chemistry). 
                    </h3>
                </div>

                <div>
                    <h2 style={{color : '#3041cb', fontSize : "3vmax"}}>
                        <b>Awards</b>
                    </h2>
                    <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                    Duke of Edinburgh Sliver / Engineering Scholarship Scheme Wales Award / Life Guard Qualifications
                    </h3>
                </div>

                <div>
                    <h2 style={{color : '#3041cb', fontSize : "3vmax"}}>
                        <b>University Grades</b>
                    </h2>
                    <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                    <b style={{fontSize : "2vmax"}}>First Year Topics: </b>
                        Computer Architecture, Security 101, Imperative Programming,
                        Functional Programming, Probability and Statistics, Mathematical Methods,
                        Databases and Cloud Concepts, Theory of Computation, Object-Oriented
                        Programming, Algorithms - averaging 67.2%.
                    </h3> 
                    <br></br>        
                </div>
            </div>
        );
    }
}