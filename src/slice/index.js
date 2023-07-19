import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './pageSlice';
import pomodoroSettingsSlice from "./pomodoroSettingsSlice";
import soundSettingsSlice from "./soundSettingsSlice";

export default configureStore({
    reducer: {
        currentPage: pageReducer,
        pomodoroSettings: pomodoroSettingsSlice,
        soundSettings: soundSettingsSlice,
    },
});