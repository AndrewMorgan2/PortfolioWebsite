import GameJam from '../img/GameJam.jpg';
import Breached from '../img/Breached.png';
import ProcessorSimulator from '../img/porf-18.png';
import Dis from '../img/model_wth_cp_plus_colour (1) .png';
import Cloud from '../img/Cloud_website.png';

import React, { useState } from 'react';
import arrow from '../img/arrow.png';
import arrowFlip from '../img/arrowFlip.png';

export default function ShowCase() {

    const [isDisplay, setIsDisplay] = useState(true);

    function handleClick(e) {
        e.preventDefault();
        if (isDisplay == false) {
            setIsDisplay(true)
        } else {
            setIsDisplay(false)
        }
    }
    return (
        <div style={{ display: 'block' }}>
            <div onClick={handleClick}>
                <h1 style={{ color: '#4483b6', fontSize: "3vmax", display: 'inline-flex' }}>
                    <b>Recently [3]</b>
                </h1>
                {isDisplay &&
                    <img src={arrow} style={{ display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1.5vmax', marginLeft: '1vmax' }} />
                }
                {!isDisplay &&
                    <img src={arrowFlip} style={{ display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1.5vmax', marginLeft: '1vmax' }} />
                }
            </div>

            {isDisplay &&
                <div>

                    <div style={{ display: "flex", color: "white"}}>
                        <div className="relative flex min-h-screen flex-col justify-center" style={{ width: '30%', height: '30%', margin: '1%', display: 'block'}}>
                            <div class="mx-auto flex w-96 flex-col justify-center rounded-lg shadow-xl shadow-slate-300/60" style={{background: "black"}}>
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={ProcessorSimulator}  style={{ width: '100%', height: '100%'}}/>
                                <div class="p-1">
                                    <h1 class="text-xl font-medium text-slate-600" style={{fontSize: "1.5vmax"}}>Processor Simulator</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>I built a processor with my own instruction set and programmed some simple programs using the simulator. I ran experiments on this simulator to show the effect of different components. 
                                    <a href="https://github.com/AndrewMorgan2/MyProcessor"> Github Link</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex min-h-screen flex-col justify-center" style={{ width: '30%', height: '30%', margin: '1%', display: 'block'}}>
                            <div class="mx-auto flex w-96 flex-col justify-center rounded-lg shadow-xl shadow-slate-300/60" style={{background: "black"}}>
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={Dis}  style={{ width: '100%', height: '100%'}}/>
                                <div class="p-1">
                                    <h1 class="text-xl font-medium text-slate-600" style={{fontSize: "1.5vmax"}}>Generating 3D Models From Images</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}> This project uses deep learning combined to genertate models of people from images.
                            Source code:<a href="https://github.com/AndrewMorgan2/Innovation_Case"> Github Link</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center rounded-lg shadow-xl shadow-slate-300/60" style={{background: "black"}}>
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={Cloud}  style={{ width: '100%', height: '100%'}}/>
                                <div class="p-1">
                                    <h1 class="text-2xl font-medium text-slate-600" style={{fontSize: "1.5vmax"}}>Map Reduce Cloud Application</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}> This is a application that is launched from a local machine and sets up AWS services to provide map reduce functionality.
                            Source code: <a href="https://github.com/AndrewMorgan2/Cloud_Application">Github Link</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >
    );
}