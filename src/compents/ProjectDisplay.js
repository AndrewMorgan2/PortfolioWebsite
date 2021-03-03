import BilletSortingSystem from '../img/porf-4.PNG';
import SolarCharger from '../img/porf-6.jpg';
import Speaker from '../img/porf-7.jpg';
import PinBall from '../img/porf-9.jpg';
import Flask from '../img/porf-12.PNG';
import BinaryClock from '../img/porf-13.jpg';
import Airgun from '../img/porf-14.png';
import Website from '../img/porf-16.png';

import React, {useState} from 'react'; 
import arrow from '../img/arrow.png';
import arrowFlip from '../img/arrowFlip.png';

export default function ProjectDisplay(){

    //only project visable straight away
    const [isDisplay, setIsDisplay] = useState(true);

    function handleClick(e) {
        e.preventDefault();
        if(isDisplay == false){
            setIsDisplay(true)
        } else {
            setIsDisplay(false)
        }
    }

        return(
            <div>
                <div onClick={handleClick}>
                    <h1 style={{color : '#3041cb', fontSize : "4vmax", display: 'inline-flex'}}>
                        <b>Projects</b>
                    </h1>
                    {isDisplay &&
                        <img src={arrow} style={{display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1.5vmax', marginLeft: '1vmax'}}/>
                    }
                    {!isDisplay &&
                        <img src={arrowFlip} style={{display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1.5vmax', marginLeft: '1vmax'}}/>
                    }   
                </div>

                {isDisplay &&
                <div>
                    <div style={{display: 'inline-flex'}}>
                        <img src={BilletSortingSystem} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Billet Sorting System</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            This was a team project for Engineering Education Scheme Wales. I lead this project to prove a concept to a 
                            local company. We also presented this project to the customer along with displaying it at a convention
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>                    <img src={SolarCharger} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Solar Powered Phone Charger</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            This project is incredably simple, buy some solar panels solder a diode to prevent backflow. Then charge your phone (all be it slowly).
                            I also had to work out exactly how USB power rails worked but that was about it.
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={Speaker} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Sound to Light Speaker</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            The core idea here is to use a microphone to identify 3 different tones. When the corresponding tone is played that colour LED lights up. 
                            This is really satisfying to watch
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={PinBall} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b> Pinball Machine</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            I made this when I was 15, this was my first personal project. The only technical part of this project was the solenoids that provide the force to flippers. 
                            This was actually no easy task, using high voltage is dangerous and I destroyed a few diodes before it worked
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={Flask} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Self-Heating Flask</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            So the core idea behind this project was to detect the temperature within the flask, and make it constant. I did this by modifying a flash that I brought, I wrapped chromium wire around the inside of the flash. Then used a thermistor to control when the heating element was active. 
                            I actually wrote the control in basic
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={BinaryClock} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Binary Clock</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            The basic concept here is that the top row of LEDs displays the hour and the bottom row displays the minutes. The casing for this project was made out of scrapes that I found around the house,
                            the log (where the LEDs are housed) was from a tree that feel near my house.
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={Airgun} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Airgun</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            This was a fun project, it’s every simple in design. Take some large plastic bottles form airtight seals between them and pump air into them to cause high pressure within the 2-liter bottles.
                            Then use a trigger of some sort to form to release this air and carry BB pellets.
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={Website} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b> My First Version of this Website</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            I was just getting to grips with the core concepts of HTML and CSS. Hopefully you will see how the site has improved over time,
                            as I have become more familar with web design.
                            </h3>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }