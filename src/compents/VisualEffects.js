
import React, { useState, useRef } from 'react';
import arrow from '../img/arrow.png';
import arrowFlip from '../img/arrowFlip.png';
import ReactPlayer from 'react-player';
const VIDEO_PATH_ARTHACK = 'https://youtu.be/UHoKyK34NzI';
const VIDEO_PATH_CGI = 'https://youtu.be/X0j6124pvYQ';

export default function ViusalEffects() {
    const playerRef = useRef(null);
    const [isDisplay, setIsDisplay] = useState(false);

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
                    <b>Visual Effects [2]</b>
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
                    <div style={{color:"white", display: 'flex', justifyContent:'center',  alignItems:'center' }}>
                        <ReactPlayer ref={playerRef} url={VIDEO_PATH_CGI} controls={true} />
                    </div>
                   
                    <div style={{color:"white", display: 'flex', justifyContent:'center', alignItems:'center' }}>
                        <ReactPlayer ref={playerRef} url={VIDEO_PATH_ARTHACK} controls={true} />
                    </div>
                </div>
            }
        </div >
    );
}