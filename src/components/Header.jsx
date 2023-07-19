import React from 'react';
import '../styles/header.pcss';
import ModernButton from './ModernButtonsPanel';
import { useSelector } from 'react-redux';
import {  setPomodoro, setSounds, changePage  } from '../slice/pageSlice'
import { useDispatch } from 'react-redux';

const Header = () => {
    const currentPage = useSelector((state) => state.currentPage.value);

    const dispatch = useDispatch();


    const buttons = [
        {
            title: 'Pomodoro',
            action: setPomodoro,
            dispatch: dispatch,
        },
        {
            title: 'Sounds',
            action: setSounds,
            dispatch: dispatch,
        },
    ];

    return (
        <header className={currentPage === 'SOUNDS' ? 'header__sounds header' : 'header'}>
            <ModernButton buttons={buttons}></ModernButton>
        </header>
    );
};

export default Header;