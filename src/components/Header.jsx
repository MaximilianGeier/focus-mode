import React from 'react';
import '../styles/header.pcss';
import ModernButton from './ModernButtonsPanel';
import { useSelector } from 'react-redux';
import {  setPomodoro, setSounds, changePage  } from '../slice/pageSlice'

const Header = () => {
    const currentPage = useSelector((state) => state.currentPage.value);
    const buttons = [
        {
            title: 'Pomodoro',
            action: setPomodoro,
        },
        {
            title: 'Sounds',
            action: setSounds,
        },
    ];

    return (
        <header className={currentPage === 'SOUNDS' ? 'header__sounds header' : 'header'}>
            <ModernButton buttons={buttons}></ModernButton>
        </header>
    );
};

export default Header;