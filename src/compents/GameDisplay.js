
import React, {useState} from 'react'; 
import arrow from '../img/arrow.png';
import arrowFlip from '../img/arrowFlip.png';

import DinoFight from '../img/porf-1.PNG';
import ArcadeFootball from '../img/porf-2.png';
import TurnBased from '../img/porf-3.PNG';
import SpaceHex from '../img/porf-5.jpg';
import BoyInWoods from '../img/porf-8.PNG';
import LockDown from '../img/porf-10.PNG';
import RTS from '../img/porf-11.PNG';
import ZombieGame from '../img/porf-15.PNG';



export default function GameDisplay() {

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
            <div>
                <div onClick={handleClick}>
                    <h1 style={{color : '#3041cb', fontSize : "4vmax", display: 'inline-flex'}}>
                        <b>Games</b>
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
                        <img src={DinoFight} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Dino Fight</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            This was my first local multiplayer game (party game). This is a fighting game that takes input from multiple
                            controllers. Input mangement was probably the most challenging part of this game 
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={ArcadeFootball} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Arcade Football</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            Another local multipler game that required a lot more phyiscs to handle. Working out where the ball should 
                            bounce, how that bounce changes depending on surfaces was a lot of fun
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={TurnBased} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Turn-Based Strategy</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            This was a single player game. Moving units thought terrain to fight enemies, this is a great example of 
                            object oriented code. The unit required methods along with variables such as attack and health.
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={SpaceHex} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Space Hex</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            This is a hex based stategy game. This game helped me understand lists/arrays much better, 
                            with lots of hexs and ships above them I needed to optimise the way object queries were managed.
                            </h3>
                        </div>
                    </div>
                    
                    <div style={{display: 'inline-flex'}}>
                        <img src={BoyInWoods} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Boy in the Woods</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            This is the first game I made after receiving formal education within computer science, as with all of my games and most of my projects I have used the object orientated philosophy.
                            The code is far more organised, this is something I now value highly.
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={LockDown} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Lock Down Simulator</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            During the corona lockdown I 3D modelled a house and began simulating hunger and work. 
                            The pathfinding was easy because the map was static and the behaviors were basically move here and do this. Fun to program, not fun to watch
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={RTS} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Real Time Strategy</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            This is a real time strategy game, that only has resource collection. 
                            The original scope was much larger, but after struggling to generate simple collection routines for villages I decided to reduce the scope. 
                            </h3>
                        </div>
                    </div>

                    <div style={{display: 'inline-flex'}}>
                        <img src={ZombieGame} style={{width: '40%', float: 'left'}}/>
                        <div style={{height : '50%', width: '50%', marginLeft: '0.5vmin'}}>
                            <h2 style={{color : '#3041cb', fontSize : "3vmax"}}><b>Zombie Game</b></h2>
                            <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                            Raycasting, pathfinding, AI and storing values in encypted files. 
                            This project taught me that a good design philosophy allows for ways to increase the scope of a project. This is my first "real" single player game.
                            </h3>
                        </div>
                    </div>
                </div>
                }
        </div>
        );
    }