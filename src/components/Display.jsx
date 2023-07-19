import React, { useEffect, useState, useRef } from 'react';
import '../styles/display.pcss';
import { useSelector } from 'react-redux'
import PomodoroTimer from './PomodoroTimer';
import Sounds from './Sounds';
import { CSSTransition } from 'react-transition-group'

const Display = () => {
    const currentPage = useSelector((state) => state.currentPage.value);
    const currentAudio = useSelector((state) => state.soundSettings.currentAudio);
    const isAudioPlayng = useSelector((state) => state.soundSettings.isPlaying);
    const soundsRef = React.useRef();
    
    const [audio, setAudio] = useState(new Audio(currentAudio));
    audio.loop = true;

    console.log(isAudioPlayng);

    useEffect(() => {
        console.log('hello')
        isAudioPlayng ? audio.play() : audio.pause();
    }, [isAudioPlayng]);

    return (
        <div className={currentPage === 'SOUNDS' ? 'display drop' : 'display'}>
            <CSSTransition nodeRef={soundsRef} in={currentPage === 'SOUNDS'} timeout={200} classNames='spawn-animation' unmountOnExit>
                    <Sounds refs={soundsRef}/>
            </CSSTransition>
            <PomodoroTimer />
        </div>
    );
};

export default Display;