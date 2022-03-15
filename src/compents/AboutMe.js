
import React from 'react'; 

export default class AboutMe extends React.Component {
    render(){
        return (
            <div>
                <br/>
                <br/>
                <h3 style={{fontSize : "1.5vmax", color: "white"}}>
                    I have made this website to display my projects.
                    I'm a full stack developer, I've built my own processor simulator running my own RISC instruction set.
                    I've written projects using basic, Haskell, Prolog, C, C++, C#, go, Java, SQL, HTML and CSS.
                    These are some of my projects.
                </h3>
            </div>
        );
    }
}