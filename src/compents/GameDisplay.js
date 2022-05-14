
import React, { useState } from 'react';
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
import Hexile from '../img/Hexile.jpg';



export default function GameDisplay() {

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
                <h1 style={{ color: '#4483b6', fontSize: "4vmax", display: 'inline-flex' }}>
                    <b>Games [6]</b>
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
                    <div style={{ display: 'inline-flex' }}>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={Hexile} style={{ width: '100%', height: '100%' }} />
                                <div class="p-4">
                                    <h1 class="text-2xl font-medium text-slate-600 pb-2" style={{fontSize: "1.5vmax"}}>Hexile</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                    Hex based strategy game that used LAN to connect players together. Required alot of interations to make the game balanced. </p>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={ArcadeFootball} style={{ width: '100%', height: '100%' }} />
                                <div class="p-4">
                                    <h1 class="text-2xl font-medium text-slate-600 pb-2" style={{fontSize: "1.5vmax"}}>Arcade Football</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                        Another local multipler game that required a lot more phyiscs to handle. Working out where the ball should
                                        bounce, how that bounce changes depending on surfaces was a lot of fun. </p>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={SpaceHex} style={{ width: '100%', height: '100%' }} />
                                <div class="p-4">
                                    <h1 class="text-2xl font-medium text-slate-600 pb-2" style={{fontSize: "1.5vmax"}}>Space Hex</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                        This is a hex based stategy game. This game helped me understand lists/arrays much better,
                                        with lots of hexs and ships above them I needed to optimise the way object queries were managed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'inline-flex' }}>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={DinoFight} style={{ width: '100%', height: '100%' }} />
                                <div class="p-4">
                                    <h1 class="text-2xl font-medium text-slate-600 pb-2" style={{fontSize: "1.5vmax"}}>Dino Fight</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                        This was my first local multiplayer game (party game). This is a fighting game that takes input from multiple
                                        controllers. Input mangement was probably the most challenging part of this game </p>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={BoyInWoods} style={{ width: '100%', height: '100%' }} />
                                <div class="p-4">
                                    <h1 class="text-2xl font-medium text-slate-600 pb-2" style={{fontSize: "1.5vmax"}}>Boy in the Woods</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                        This is the first game I made after receiving formal education within computer science, as with all of my games and most of my projects I have used the object orientated philosophy.
                                        The code is far more organised, this is something I now value highly.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100" style={{ width: '30%', height: '30%', margin: '1%', display: 'block' }}>
                            <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-lg shadow-xl shadow-slate-300/60">
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={ZombieGame} style={{ width: '100%', height: '100%' }} />
                                <div class="p-4">
                                    <h1 class="text-2xl font-medium text-slate-600 pb-2" style={{fontSize: "1.5vmax"}}>Zombie Game</h1>
                                    <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>
                                        Raycasting, pathfinding, AI and storing values in encypted files.
                                        This project taught me that a good design philosophy allows for ways to increase the scope of a project. This is my first "real" single player game.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >
    );
}