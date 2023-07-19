import { createSlice } from '@reduxjs/toolkit';
import waterStream from '../assets/sounds/water_stream.wav';

const initialState = {
    currentAudio: waterStream,
    isPlaying: false,
};

const soundSettingsSlice = createSlice({
    name: 'pomodoro-settings',
    initialState,
    reducers: {
        setPlay: (state) => {
            console.log('im hire');
            state.isPlaying = true;
        },
        setStop: (state) => {
            console.log('nooo');
            state.isPlaying = false;
        },
    },
});

export const { setPlay, setStop } = soundSettingsSlice.actions;

export default soundSettingsSlice.reducer;
