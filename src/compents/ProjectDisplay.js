import BilletSortingSystem from '../img/porf-4.PNG';
import SolarCharger from '../img/porf-6.jpg';
import Speaker from '../img/porf-7.jpg';
import PinBall from '../img/porf-9.jpg';
import Flask from '../img/porf-12.PNG';
import BinaryClock from '../img/porf-13.jpg';
import Airgun from '../img/porf-14.png';
import Website from '../img/porf-16.png';
import DeviceEnergy from '../img/porf-17.jpg';
import AnalogProcessor from '../img/analog_processor.png';
import robotDog from '../img/robotDog.jpg';
import DeepLearning from '../img/matrix_deep.png';
import DnD from '../img/DnD.png';

import React, { useState } from 'react';
import arrow from '../img/arrow.png';
import arrowFlip from '../img/arrowFlip.png';

export default function ProjectDisplay() {

    //only project visable straight away
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
        <div>
            <div onClick={handleClick}>
                <h1 style={{ color: '#4483b6', fontSize: "3vmax", display: 'inline-flex' }}>
                    <b>Hardware Projects [8]</b>
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
                    <div style={{ display: 'inline-flex', color:"white" }}>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-black rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={BilletSortingSystem} style={{ width: '100%', height: '100%' }} />
                                <div class="p-1">
                                    <h1 class="text-2xl font-medium text-slate-600 "style={{fontSize: "1.5vmax"}}>Billet Sorting System</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                        This was a team project for Engineering Education Scheme Wales. I lead this project to prove a concept to a
                                        local company. We also presented this project to the customer along with displaying it at a convention.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-black rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={DnD} style={{ width: '100%', height: '100%' }} />
                                <div class="p-1">
                                    <h1 class="text-2xl font-medium text-slate-600 " style={{fontSize: "1.5vmax"}}>Upcycled Game Master Screen</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                        I gathered the screen from a broken IPad one, spare wood and hinges from thrown away furniture and 
                                        constructed a Dugeon Master's screen with a built in display.  
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center rounded-lg shadow-xl shadow-slate-300/60" style={{background: "black"}}>
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={robotDog}  style={{ width: '100%', height: '100%'}}/>
                                <div class="p-1">
                                    <h1 class="text-2xl font-medium text-slate-600" style={{fontSize: "1.5vmax"}}>Robot Dog</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}> A robot dog that used a ESP32 to set up a wifi network. This wifi network was used to controll the 12 servos on the dog.
                                Making it remote controlled. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'inline-flex', color:"white" }}>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-black rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={Flask} style={{ width: '100%', height: '100%' }} />
                                <div class="p-1">
                                    <h1 class="text-2xl font-medium text-slate-600 " style={{fontSize: "1.5vmax"}}>Self-Heating Flask</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                        So the core idea behind this project was to detect the temperature within the flask, and make it constant. I did this by modifying a flash that I brought, I wrapped chromium wire around the inside of the flash. Then used a thermistor to control when the heating element was active.
                                        I actually wrote the control in basic.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-black rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={PinBall} style={{ width: '100%', height: '100%' }} />
                                <div class="p-1">
                                    <h1 class="text-2xl font-medium text-slate-600 " style={{fontSize: "1.5vmax"}}>Pinball Machine</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                        I made this when I was 15, this was my first personal project. The only technical part of this project was the solenoids that provide the force to flippers.
                                        This was actually no easy task, using high voltage is dangerous and I destroyed a few diodes before it worked.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-black rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={SolarCharger} style={{ width: '100%', height: '100%' }} />
                                <div class="p-1">
                                    <h1 class="text-2xl font-medium text-slate-600 " style={{fontSize: "1.5vmax"}}>Solar Powered Phone Charger</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                        This project is incredably simple, buy some solar panels solder a diode to prevent backflow. Then charge your phone (all be it slowly).
                                        I also had to work out exactly how USB power rails worked but that was about it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'inline-flex', color:'white' }}>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-black rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={BinaryClock} style={{ width: '100%', height: '100%' }} />
                                <div class="p-1">
                                    <h1 class="text-2xl font-medium text-slate-600 " style={{fontSize: "1.5vmax"}}>Binary Clock</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                    The basic concept here is that the top row of LEDs displays the hour and the bottom row displays the minutes. The casing for this project was made out of scrapes that I found around the house,
                                    the log (where the LEDs are housed) was from a tree that feel near my house.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-black rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={Speaker} style={{ width: '100%', height: '100%' }} />
                                <div class="p-1">
                                    <h1 class="text-2xl font-medium text-slate-600 " style={{fontSize: "1.5vmax"}}>Sound to Light Speaker</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                        The core idea here is to use a microphone to identify 3 different tones. When the corresponding tone is played that colour LED lights up.
                                        This is really satisfying to watch.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}