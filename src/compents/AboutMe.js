
import React from 'react';

export default class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <h3 style={{ fontSize: "1.5vmax", color: "white", marginLeft: "10vw"}}>
                    I have made this website to display my projects.
                    I'm a full stack developer and I've written projects using:
                    <div style={{ display: 'block'}}>
                        <ul class="list-disc" style={{ display: 'inline-block', marginLeft: "2vw", }}>
                            <li>basic</li>
                            <li>Haskell</li>
                            <li>Prolog</li>
                        </ul>
                        <ul class="list-disc" style={{ display: 'inline-block', marginLeft: "2vw", }}>
                            <li>C</li>
                            <li>C++</li>
                            <li>C#</li>
                        </ul>
                        <ul class="list-disc" style={{ display: 'inline-block', marginLeft: "2vw", }}>
                            <li>go</li>
                            <li>Java</li>
                            <li>SQL</li>
                        </ul>
                        <ul class="list-disc" style={{ display: 'inline-block', marginLeft: "2vw", }}>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        <ul class="list-disc" style={{ display: 'inline-block', marginLeft: "2vw", }}>
                            <li>AWS</li>
                            <li>google cloud</li>
                        </ul>
                    </div>
                </h3>
            </div>
        );
    }
}