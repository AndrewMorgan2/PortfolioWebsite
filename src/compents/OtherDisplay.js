
import HeadBoy from '../img/Headboy.jpg';
import Dyson from '../img/Dyson.png';
import Cards from '../img/Cards.jpeg';

import React, {useState} from 'react'; 
import arrow from '../img/arrow.png';
import arrowFlip from '../img/arrowFlip.png';

export default function OtherDisplay () {

    const [isDisplay, setIsDisplay] = useState(false);

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
                    <h1 style={{color : '#3041cb', fontSize : "4vmax", display: 'inline-flex'}}>
                        <b>Other [3]</b>
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
                        <img src={HeadBoy} style={{width: '40%',  height:'40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Head Boy</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            This was a great experience to have, organising events and public speaking are amoung the skills it helped me to develop 
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={Dyson} style={{width: '40%',  height:'40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Dyson Mentoring</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            I was part of an industry mentoring scheme with Dyson. This involved doing research into a given topic and giving a presentation based on the findings. I won best presentation on one occasion
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={Cards} style={{width: '40%',  height:'40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Cards For Good Causes</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            Over Christmas I volunteer at a card shop that uses donates profit to charity
                            </h3>
                        </div>
                    </div>
                </div>
                }   
            </div>
        );
    }