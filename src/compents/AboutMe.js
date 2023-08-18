
import React from 'react';

export default class AboutMe extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center"}}>
                <h3 style={{ fontSize: "1.5vmax", color: "white" }}>
                    I made this website to display my projects.
                    I'm a full stack developer and I've written projects using:
                </h3>
                <div style={{ display: "block", color: "black" }}>
                    <div class="mx-auto flex w-96 flex-col justify-center rounded-lg shadow-xl shadow-slate-300/60" style={{ background: '#4483b6', display: "inline-flex"}}>
                        <div class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg">
                            <h3 style={{ margin: "0.5vw", fontSize: "1.5vmax" }}>Basic / Haskell / Prolog / C / C# / Rust / go / Java / SQL / Python / HTML / CSS / AWS / Google Cloud</h3>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}