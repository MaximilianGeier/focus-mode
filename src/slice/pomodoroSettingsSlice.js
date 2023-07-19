import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 25,
};

const pomodoroSettingsSlice = createSlice({
    name: 'pomodoro-settings',
    initialState,
    reducers: {
        setDuration: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setDuration } = pomodoroSettingsSlice.actions;

export default pomodoroSettingsSlice.reducer;