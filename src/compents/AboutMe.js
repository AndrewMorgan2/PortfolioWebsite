
import React from 'react';

export default class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <h3 style={{ fontSize: "1.5vmax", color: "white"}}>
                    I have made this website to display my projects.
                    I'm a full stack developer and I've written projects using:
                    <div style={{ display: 'block'}}>
                        <ul class="list-disc" style={{ display: "inline-flex"}}>
                            <li>basic</li>
                            <li style={{ marginLeft:"2vw"}}>Haskell</li>
                            <li style={{ marginLeft:"2vw"}}>Prolog</li>
                            <li style={{ marginLeft:"2vw"}}>C</li>
                            <li style={{ marginLeft:"2vw"}}>C++</li>
                            <li style={{ marginLeft:"2vw"}}>C#</li>
                            <li style={{ marginLeft:"2vw"}}>go</li>
                            <li style={{ marginLeft:"2vw"}}>Java</li>
                            <li style={{ marginLeft:"2vw"}}>SQL</li>
                            <li style={{ marginLeft:"2vw"}}>Python</li>
                            <li style={{ marginLeft:"2vw"}}>HTML</li>
                            <li style={{ marginLeft:"2vw"}}>CSS</li>
                            <li style={{ marginLeft:"2vw"}}>AWS</li>
                            <li style={{ marginLeft:"2vw"}}>Google Cloud</li>
                        </ul>
                    </div>
                </h3>
            </div>
        );
    }
}