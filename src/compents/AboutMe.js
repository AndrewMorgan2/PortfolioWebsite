
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
                            <li style={{ display: "inline-block"}}>Basic</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>Haskell</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>Prolog</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>C</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>C++</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>C#</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>go</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>Java</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>SQL</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>Python</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>HTML</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>CSS</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>AWS</li>
                            <li style={{ display: "inline-block", marginLeft:"1.5vw"}}>Google Cloud</li>
                        </ul>
                    </div>
                </h3>
            </div>
        );
    }
}