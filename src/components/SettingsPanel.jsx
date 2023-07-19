import React from 'react';
import '../styles/settingsPanel.pcss'
import ModernButton from './ModernButtonsPanel';
import { useDispatch } from 'react-redux';
import { setDuration } from '../slice/pomodoroSettingsSlice'
import { useSelector } from 'react-redux'

const SettingsPanel = () => {
    const currentPage = useSelector((state) => state.currentPage.value);
    const dispatch = useDispatch();

    const buttons = [
        {
            title: '25 min',
            action: () => setDuration(25),
            dispatch: dispatch,
        },
        {
            title: '30 min',
            action: () => setDuration(30),
            dispatch: dispatch,
        },
        {
            title: '50 min',
            action: () => setDuration(50),
            dispatch: dispatch,
        },
    ];

    return ( 
        <div className={currentPage === 'POMODORO' ? 'pomodoro-color settings-panel' : 'sounds-color settings-panel'}>
            <ModernButton buttons={buttons} />
        </div>
     );
}
 
export default SettingsPanel;