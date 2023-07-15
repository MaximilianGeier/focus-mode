import React, { useState } from 'react';
import playImage from '../assets/images/play.svg';
import pauseImage from '../assets/images/pause.svg';
import waterStream from '../assets/sounds/water_stream.wav';

const Sounds = () => {
    const [isSoundsPlaying, setIsSoundsPlaying] = useState(false);
    const [soundsAudio, setSoundsAudio] = useState(new Audio(waterStream));
    soundsAudio.loop = true;

    let changeSoundsState = () => {
        if(!isSoundsPlaying) {
            setIsSoundsPlaying(true);
            soundsAudio.play();
        } else {
            setIsSoundsPlaying(false);
            soundsAudio.pause();
        }
    };

    return (
        <div className='sounds__play_btn' onClick={() => changeSoundsState()}>
            <img src={ isSoundsPlaying ? pauseImage : playImage } alt="PLAY" />
        </div>
    );
};

export default Sounds;