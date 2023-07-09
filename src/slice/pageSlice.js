import { createSlice } from '@reduxjs/toolkit';

const POMODORO = 'POMODORO';
const SOUNDS = 'SOUNDS';

const initialState = {
    value: POMODORO,
};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPomodoro: (state) => {
            state.value = POMODORO;
        },
        setSounds: (state) => {
            state.value = SOUNDS;
        },
        changePage: (state) => {
            if (state.value === POMODORO) {
                state.value = SOUNDS;
            } else {
                state.value = POMODORO;
            }
        },
        // example: (state, action) => {
        //     state.value += action.payload;
        // },
    },
});

export const { setPomodoro, setSounds, changePage } = pageSlice.actions;

export default pageSlice.reducer;