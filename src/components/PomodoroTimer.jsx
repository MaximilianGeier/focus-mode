import {React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import bellSound from '../assets/sounds/pomodoro_bell.wav';
import playImage from '../assets/images/play.svg';
import pauseImage from '../assets/images/pause.svg';
import { CSSTransition } from 'react-transition-group'

const PomodoroTimer = () => {
    const currentPage = useSelector((state) => state.currentPage.value);
    const [timerMinutesValue, setTimerMinutesValue] = useState(25);
    const [minutes, setMinutes] = useState(timerMinutesValue);
    const [seconds, setSeconds] = useState(0);
    const [isPomodoroPlaying, setIsPomodoroPlaying] = useState(false);
    const [pomodoroAudio, setPomodoroAudio] = useState(new Audio(bellSound));

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

    return (
        <div>
            <CSSTransition in={currentPage === 'POMODORO'} timeout={200} classNames='spawn-animation' unmountOnExit>
                <div className='pomodoro__play_btn' onClick={() => changeTimerState()}>
                    <img src={ isPomodoroPlaying ? pauseImage : playImage } alt="PLAY" />
                </div>
            </CSSTransition>
            <span className='timer'>{parseTime(minutes, seconds)}</span>
            
        </div>
    );
};

export default PomodoroTimer;