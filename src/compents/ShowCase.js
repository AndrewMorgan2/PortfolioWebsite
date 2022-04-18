
import robotDog from '../img/robotDog.jpg';
import Breached from '../img/Breached.png';
import ProcessorSimulator from '../img/MyProcessor.png';

import React, {useState} from 'react'; 
import arrow from '../img/arrow.png';
import arrowFlip from '../img/arrowFlip.png';

export default function ShowCase() {

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
            <div style ={{display : 'block'}}>
                <div onClick={handleClick}>
                    <h1 style={{color : '#4483b6', fontSize : "4vmax", display: 'inline-flex'}}>
                        <b>Recently [3]</b>
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
                        <img src={ProcessorSimulator} style={{width: '40%',  height:'40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#4483b6', fontSize : "3vmax"}}><b>Processor Simulator</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            I built a processor, if this interests you <a href="https://github.com/AndrewMorgan2/MyProcessor">here's a link to the github page</a>
                            </h3>
                        </div>
                    </div>
                    <div style={{display: 'inline-flex'}}>
                        <img src={robotDog} style={{width: '40%',  height:'40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#4483b6', fontSize : "3vmax"}}><b>Robot Dog</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            A robot dog that used a ESP32 to set up a wifi network. This wifi network was used to controll the 12 servos on the dog.
                            Making it remote controlled.
                            </h3>
                        </div>
                    </div>
                    <div style={{display: 'inline-flex'}}>
                        <img src={Breached} style={{width: '40%',  height:'40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#4483b6', fontSize : "3vmax"}}><b>Breached</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            First person, web browser co-op escape room style game, complete with water simulation. I did this as a team of 6 in my 3rd year of university
                            Source code: <a href="https://github.com/breached-game/BreachedGame">here's a link to the github page</a>
                            </h3>
                        </div>
                    </div>
                </div>
                }   
            </div>
        );
    }