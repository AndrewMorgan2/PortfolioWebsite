
import React from 'react'; 

export default class AboutMe extends React.Component {
    render(){
        return (
            <div>
                <h1 style={{fontSize : "3vmax", color: "#3041cb"}}>
                    <b>About Me</b>
                </h1>
                <h3 style={{fontSize : "1.5vmax", color: "white"}}>
                    I'm have made this website to display my projects.
                    My details are at the bottom of the page.
                    I can write in Java, C#, C++, C, HTML, CSS, Haskell, SQL, go and basic. 
                    I learn best when I can use the information to build something useful as the information has a practical application.
                    That is the main reason I build these projects, some of the projects are proof of concept or even just to 
                    make some computer thoery abit more concrete.
                </h3>
            </div>
        );
    }
}