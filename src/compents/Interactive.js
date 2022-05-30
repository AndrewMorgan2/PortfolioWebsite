
import robotDog from '../img/robotDog.jpg';
import Breached from '../img/Breached.png';
import ProcessorSimulator from '../img/porf-18.png';

import React, { useState } from 'react';
import arrow from '../img/arrow.png';
import arrowFlip from '../img/arrowFlip.png';

import SortingAlgorithms from "../interactive/Home";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function randomNumberInRange(min, max, numberOfNumbers) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    const array = []
    for (let index = 0; index < numberOfNumbers; index++) {
        const element = Math.floor(Math.random() * (max - min + 1)) + min;
        array[index] = element;
    }
    return array;
}

export const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Sorting Algorithms',
        },
    },
};

const labels = [1,2,3,4,5,6,7,8,9,10];

export const data = {
    datasets: [
        {
            label: 'Random Numbers',
            data: labels?.map(() =>randomNumberInRange(1, 10, labels.length)),
            backgroundColor: '#4483b6',
        },
    ],
};

export default function ShowCase() {

    const [isDisplay, setIsDisplay] = useState(false);
    const [num, setNum] = useState(0);

    const handleClickRandomNum = () => {
        setNum(randomNumberInRange(1, 5, 10));
    };
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
                <h1 style={{ color: '#4483b6', fontSize: "3vmax", display: 'inline-flex' }}>
                    <b>Interactive [1]</b>
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
                    <SortingAlgorithms/>
                </div>
            }
        </div >
    );
}