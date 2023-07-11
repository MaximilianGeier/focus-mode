import React, { useEffect, useState } from 'react';
import '../styles/display.pcss';
import { useSelector } from 'react-redux'
import playImage from '../assets/images/play.svg';
import pauseImage from '../assets/images/pause.svg';
import bellSound from '../assets/sounds/pomodoro_bell.wav';
import waterStream from '../assets/sounds/water_stream.wav';

const Display = () => {
    const currentPage = useSelector((state) => state.currentPage.value);
    const [timerMinutesValue, setTimerMinutesValue] = useState(25);
    const [minutes, setMinutes] = useState(timerMinutesValue);
    const [seconds, setSeconds] = useState(0);
    const [isPomodoroPlaying, setIsPomodoroPlaying] = useState(false);
    const [isSoundsPlaying, setIsSoundsPlaying] = useState(false);
    const [pomodoroAudio, setPomodoroAudio] = useState(new Audio(bellSound));
    const [soundsAudio, setSoundsAudio] = useState(new Audio(waterStream));

    soundsAudio.loop = true;

    // work with timer
    const TimerDecrement = () => {
        if(seconds === 0) {
            if(minutes === 0) {
                pomodoroAudio.play();
                setIsPomodoroPlaying(false);
                setTimeout(() => setMinutes(timerMinutesValue), 500);
                return;
            } else if(minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
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
        setIsPomodoroPlaying(!isPomodoroPlaying);
    } 


    useEffect(() => {
        if (isPomodoroPlaying) {
            setTimeout(() => TimerDecrement(), 1000);
        }
    });

    // work with sounds
    let changeSoundsState = () => {
        if(!isSoundsPlaying) {
            setIsSoundsPlaying(true);
            soundsAudio.play();
        } else {
            setIsSoundsPlaying(false);
            soundsAudio.pause();
        }
    };

    // UI
    let button;
    if(currentPage === "POMODORO") {
        button = [
            <div className='pomodoro__play_btn' onClick={() => changeTimerState()}>
                <img src={ isPomodoroPlaying ? pauseImage : playImage } alt="PLAY" />
            </div>
        ];
    } else {
        button = [
            <div className='sounds__play_btn' onClick={() => changeSoundsState()}>
                <img src={ isSoundsPlaying ? pauseImage : playImage } alt="PLAY" />
            </div>
        ];
    }

    return (
        <div className={currentPage === 'SOUNDS' ? 'display drop' : 'display'}>
            <span className='timer'>{parseTime(minutes, seconds)}</span>
            {button}
        </div>
    );
};

export default Display;