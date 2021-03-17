import React, { Component, useState } from "react";
import Chessboard from "chessboardjsx";
import StockFish from "./Stockfish.js";
//Just display arrow
import arrow from '../img/arrow.png';
import arrowFlip from '../img/arrowFlip.png';

function ChessAI () {

    const [isDisplay, setIsDisplay] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        if(isDisplay == false){
            setIsDisplay(true)
        } else {
            setIsDisplay(false)
        }
    }

    return (
    <div style ={{display : 'block'}}>
        <div onClick={handleClick}>
                    <h1 style={{color : '#4483b6', fontSize : "4vmax", display: 'inline-flex'}}>
                        <b>Interactive [1]</b>
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
            <div style = {{display: 'block'}}>
                <div style={{height : '50%', width: '100%'}}>
                    <h2 style={{color : '#4483b6', fontSize : "3vmax"}}><b>Chess AI</b></h2>
                    <h3 style={{color : 'white', fontSize : "1.5vmax"}}>
                    This is a chess AI that I developed during the corona virus lockdown. Feel free to have a go. I'm currently rated about 
                    1500 on chess.com (making me a pretty average chess player), and I never beat this AI. I will be alerted if someone wins!
                    </h3>
                </div>
            </div>
            <div style={boardsContainer}>
                <StockFish>
                {({ position, onDrop }) => (
                    <Chessboard
                    id="stockfish"
                    position={position}
                    width={400}
                    onDrop={onDrop}
                    boardStyle={boardStyle}
                    orientation="black"
                    />
                )}
                </StockFish>
            </div>
        </div>}
    </div>
    );
}

export default ChessAI;

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};
const boardStyle = {
  borderRadius: "5px",
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
};
