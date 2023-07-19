import React, { useState } from 'react';
import playImage from '../assets/images/play.svg';
import pauseImage from '../assets/images/pause.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPlay, setStop } from '../slice/soundSettingsSlice'

const Sounds = () => {
    const isSoundsPlaying = useSelector((state) => state.soundSettings.isPlaying);
    const dispatch = useDispatch();
    //const [isSoundsPlaying, setIsSoundsPlaying] = useState(false);
    //const [soundsAudio, setSoundsAudio] = useState(new Audio(waterStream));
    //soundsAudio.loop = true;

    let changeSoundsState = () => {
        if(!isSoundsPlaying) {
            console.log('setPlay');
            dispatch(setPlay());
            //setIsSoundsPlaying(true);
            //soundsAudio.play();
        } else {
            console.log('setStop');
            dispatch(setStop());
            //setIsSoundsPlaying(false);
            //soundsAudio.pause();
        }
    };

    return (
        <div className='sounds__play_btn' onClick={() => changeSoundsState()}>
            <img src={ isSoundsPlaying ? pauseImage : playImage } alt="PLAY" />
        </div>
    );
};

export default Sounds;