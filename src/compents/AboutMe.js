
import React from 'react'; 

export default class AboutMe extends React.Component {
    render(){
        return (
            <div>
                <br/>
                <h3 style={{fontSize : "1.5vmax", color: "white"}}>
                    I have made this website to display my projects.
                    I'm a full stack developer, I've built my own processor simulator running my own RISC instruction set.
                    I've written projects using basic, Haskell, Prolog, C, C++, C#, go, Java, SQL, HTML and CSS.
                    I'm also familair with AWS and google cloud. 
                    <a href="https://github.com/AndrewMorgan2/">Link to my github</a>
                    These are some of my projects.
                </h3>
            </div>
        );
    }
}