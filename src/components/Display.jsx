import React, { useEffect, useState } from 'react';
import '../styles/display.pcss';
import { useSelector } from 'react-redux'
import playImage from '../assets/images/play.svg';
import pauseImage from '../assets/images/pause.svg';

const Display = () => {
    const currentPage = useSelector((state) => state.currentPage.value);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const TimerDecrement = () => {
        if(seconds === 0) {
            if(minutes === 0) {
                return;
            } else if(minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(60);
            };
        } else if(seconds > 0) {
            setSeconds(seconds - 1);
        } else {
            console.log("What a Terrible Failure!");
        }
    };

    const parseTime = (min, sec) => {
        return min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0');
    };

    const changeTimerState = () => {
        setIsPlaying(!isPlaying);
    } 


    useEffect(() => {
        if (isPlaying) {
            setTimeout(() => TimerDecrement(), 1000);
        }
    });

    return (
        <div className={currentPage === 'SOUNDS' ? 'display drop' : 'display'}>
            <span className='timer'>{parseTime(minutes, seconds)}</span>
            <div className='play_btn' onClick={() => changeTimerState()}>
                <img src={ isPlaying ? pauseImage : playImage } alt="PLAY" />
            </div>
        </div>
    );
};

export default Display;