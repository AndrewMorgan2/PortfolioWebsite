import SageScreen from '../img/sage_screen.png';
import SageEink from '../img/sage_eink.png';
import SageUI from '../img/sage_ui.png';

import React, { useState } from 'react';
import arrow from '../img/arrow.png';
import arrowFlip from '../img/arrowFlip.png';

export default function BoardGameProjectDisplay() {

    //only project visable straight away
    const [isDisplay, setIsDisplay] = useState(true);
    const [isSageSlateDisplay, setIsSageSlateDisplay] = useState(true);
    const [isScreenSageDisplay, setIsScreenSageDisplay] = useState(true);

    function handleClick(e) {
        e.preventDefault();
        setIsDisplay(!isDisplay);
    }

    function handleSageSlateClick(e) {
        e.stopPropagation();
        setIsSageSlateDisplay(!isSageSlateDisplay);
    }

    function handleScreenSageClick(e) {
        e.stopPropagation();
        setIsScreenSageDisplay(!isScreenSageDisplay);
    }

    return (
        <div>
            <div onClick={handleClick}>
                <h1 style={{ color: '#4483b6', fontSize: "3vmax", display: 'inline-flex' }}>
                    <b>TTRPG Projects</b>
                </h1>
                {isDisplay &&
                    <img src={arrow} style={{ display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1.5vmax', marginLeft: '1vmax' }} />
                }
                {!isDisplay &&
                    <img src={arrowFlip} style={{ display: 'inline-flex', width: '3%', height: '3%', marginBottom: '1.5vmax', marginLeft: '1vmax' }} />
                }
            </div>

            {isDisplay &&
                <div style={{ paddingLeft: '2%' }}>

                    {/* Sage Slate sub-section */}
                    <div onClick={handleSageSlateClick} style={{ cursor: 'pointer' }}>
                        <h2 style={{ color: '#4483b6', fontSize: "2.2vmax", display: 'inline-flex' }}>
                            <b>Sage Slate</b>
                        </h2>
                        {isSageSlateDisplay &&
                            <img src={arrow} style={{ display: 'inline-flex', width: '2.5%', height: '2.5%', marginBottom: '1vmax', marginLeft: '1vmax' }} />
                        }
                        {!isSageSlateDisplay &&
                            <img src={arrowFlip} style={{ display: 'inline-flex', width: '2.5%', height: '2.5%', marginBottom: '1vmax', marginLeft: '1vmax' }} />
                        }
                    </div>

                    {isSageSlateDisplay &&
                        <div>
                            <div style={{ display: "flex", color: "white"}}>
                                <div className="relative flex min-h-screen flex-col justify-center" style={{ width: '90%', height: '90%', margin: '1%', display: 'block'}}>
                                    <div class="mx-auto flex w-96 flex-col justify-center rounded-lg shadow-xl shadow-slate-300/60" style={{background: "black"}}>
                                        <div class="p-1">
                                            <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>SageSlate is a lightweight Virtual Tabletop (VTT) application designed specifically for enhancing in-person tabletop roleplaying experiences. Built on Electron, this open-source Dungeon Master tool can be controlled locally or accessed via LAN, with development focused on evolving into a full-featured Progressive Web App (PWA).
                                            SageSlate leverages OBS for visual output and integrates Linux utilities like ImageMagick to generate custom graphics, creating a streamlined yet powerful solution for Dungeon Masters who want to incorporate digital elements into their physical gaming sessions without the complexity of traditional VTTs. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: "flex", color: "white"}}>
                                <div className="relative flex min-h-screen flex-col justify-center" style={{ width: '30%', height: '30%', margin: '1%', display: 'block'}}>
                                    <div class="mx-auto flex w-96 flex-col justify-center rounded-lg shadow-xl shadow-slate-300/60" style={{background: "black"}}>
                                        <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={SageUI}  style={{ width: '100%', height: '100%'}}/>
                                        <div class="p-1">
                                            <h1 class="text-xl font-medium text-slate-600" style={{fontSize: "1.5vmax"}}>User Interface</h1>
                                            <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>Our intuitive UI makes accessing these features a breeze. It includes an image generation API interface, empowering users to create custom visuals on the fly. The entire system is designed with user-friendliness in mind, ensuring that both new and experienced players can easily navigate and utilize its capabilities.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative flex min-h-screen flex-col justify-center" style={{ width: '30%', height: '30%', margin: '1%', display: 'block'}}>
                                    <div class="mx-auto flex w-96 flex-col justify-center rounded-lg shadow-xl shadow-slate-300/60" style={{background: "black"}}>
                                        <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={SageEink}  style={{ width: '100%', height: '100%'}}/>
                                        <div class="p-1">
                                            <h1 class="text-xl font-medium text-slate-600" style={{fontSize: "1.5vmax"}}>E-ink Screens</h1>
                                            <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>Our e-ink display enhances your tabletop gaming experience, particularly for Dungeons & Dragons and other TTRPGs. It helps players track essential information, such as character stats, providing a convenient and immersive way to manage game elements.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative flex min-h-screen flex-col justify-center" style={{ width: '30%', height: '30%', margin: '1%', display: 'block'}}>
                                    <div class="mx-auto flex w-96 flex-col justify-center rounded-lg shadow-xl shadow-slate-300/60" style={{background: "black"}}>
                                        <img class="aspect-video w-96 rounded-t-2xl object-cover object-center rounded-lg" src={SageScreen}  style={{ width: '100%', height: '100%'}}/>
                                        <div class="p-1">
                                            <h1 class="text-xl font-medium text-slate-600" style={{fontSize: "1.5vmax"}}>Regular Screens</h1>
                                            <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>The custom combat overlay is a game-changer for battle management. It efficiently tracks effects and HP, allowing players to see the turn order at a glance. GMs can elevate the gaming experience by displaying custom images and videos, bringing encounters to life.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://github.com/AndrewMorgan2/SageSlate" className="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1.5vmax", textAlign: "center"}}>SageSlate Github</a>
                        </div>
                    }

                    {/* Screen Sage sub-section */}
                    <div onClick={handleScreenSageClick} style={{ cursor: 'pointer', marginTop: '2vmax' }}>
                        <h2 style={{ color: '#4483b6', fontSize: "2.2vmax", display: 'inline-flex' }}>
                            <b>Screen Sage</b>
                        </h2>
                        {isScreenSageDisplay &&
                            <img src={arrow} style={{ display: 'inline-flex', width: '2.5%', height: '2.5%', marginBottom: '1vmax', marginLeft: '1vmax' }} />
                        }
                        {!isScreenSageDisplay &&
                            <img src={arrowFlip} style={{ display: 'inline-flex', width: '2.5%', height: '2.5%', marginBottom: '1vmax', marginLeft: '1vmax' }} />
                        }
                    </div>

                    {isScreenSageDisplay &&
                        <div style={{ color: "white" }}>
                            <div style={{ display: "flex", gap: "2%", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                                <div style={{ flex: "0 1 45%", minWidth: "280px" }}>
                                    <div class="flex flex-col justify-center rounded-lg shadow-xl shadow-slate-300/60" style={{background: "black"}}>
                                        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "0.5rem" }}>
                                            <iframe
                                                src="https://www.youtube.com/embed/z76-2u7eoV4"
                                                title="Screen Sage"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "0.5rem", border: "none" }}
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ flex: "0 1 45%", minWidth: "280px" }}>
                                    <div class="flex flex-col justify-center rounded-lg shadow-xl shadow-slate-300/60" style={{background: "black"}}>
                                        <div class="p-1">
                                            <p class="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1vmax"}}>ScreenSage is a self-hosted battlemap display system built for tabletop RPG game masters. Run it on any Linux machine, connect your players' devices via its built-in WiFi hotspot, and control everything (maps, fog of war, and scene transitions) from an intuitive web interface. Touchscreen support included.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://github.com/AndrewMorgan2/screensage-app" className="text-sm tracking-tight font-light text-slate-400 leading-6" style={{fontSize: "1.5vmax", textAlign: "center", display: "block", marginTop: "1vmax"}}>ScreenSage Github</a>
                        </div>
                    }

                </div>
            }
        </div>
    );
}