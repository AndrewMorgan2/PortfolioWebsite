
import robotDog from '../img/robotDog.jpg';
import Breached from '../img/Breached.png';
import ProcessorSimulator from '../img/MyProcessor.png';

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
                <h1 style={{ color: '#4483b6', fontSize: "4vmax", display: 'inline-flex' }}>
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
                    <div class="p-10">
                        <div class=" w-full lg:max-w-full lg:flex">
                            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/mountain.jpg')" title="Mountain">
                            </div>
                            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div class="mb-8">
                                    <p class="text-sm text-gray-600 flex items-center">
                                        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                        </svg>
                                        Members only
                                    </p>
                                    <div class="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</div>
                                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                </div>
                                <div class="flex items-center">
                                    <img class="w-10 h-10 rounded-full mr-4" src="/Icon.png" alt="Avatar of Writer"/>
                                        <div class="text-sm">
                                            <p class="text-gray-900 leading-none">John Smith</p>
                                            <p class="text-gray-600">Aug 18</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'inline-flex' }}>
                        <img src={ProcessorSimulator} style={{ width: '40%', height: '40%', float: 'left' }} />
                        <div style={{ height: '50%', width: '50%', marginLeft: '0.5vmin' }}>
                            <h2 style={{ color: '#4483b6', fontSize: "3vmax" }}><b>Processor Simulator</b></h2>
                            <h3 style={{ color: 'white', fontSize: "1.5vmax" }}>
                                I built a processor, if this interests you <a href="https://github.com/AndrewMorgan2/MyProcessor">here's a link to the github page</a>
                            </h3>
                        </div>
                    </div>
                    <div style={{ display: 'inline-flex' }}>
                        <img src={robotDog} style={{ width: '40%', height: '40%', float: 'left' }} />
                        <div style={{ height: '50%', width: '50%', marginLeft: '0.5vmin' }}>
                            <h2 style={{ color: '#4483b6', fontSize: "3vmax" }}><b>Robot Dog</b></h2>
                            <h3 style={{ color: 'white', fontSize: "1.5vmax" }}>
                                A robot dog that used a ESP32 to set up a wifi network. This wifi network was used to controll the 12 servos on the dog.
                                Making it remote controlled.
                            </h3>
                        </div>
                    </div>
                    <div style={{ display: 'inline-flex' }}>
                        <img src={Breached} style={{ width: '40%', height: '40%', float: 'left' }} />
                        <div style={{ height: '50%', width: '50%', marginLeft: '0.5vmin' }}>
                            <h2 style={{ color: '#4483b6', fontSize: "3vmax" }}><b>Breached</b></h2>
                            <h3 style={{ color: 'white', fontSize: "1.5vmax" }}>
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