import React, { useEffect, useState } from 'react';
import '../styles/display.pcss';
import { useSelector } from 'react-redux'
import PomodoroTimer from './PomodoroTimer';
import Sounds from './Sounds';
import { CSSTransition } from 'react-transition-group'

const Display = () => {
    const currentPage = useSelector((state) => state.currentPage.value);

    return (
        <div className={currentPage === 'SOUNDS' ? 'display drop' : 'display'}>
            <CSSTransition in={currentPage === 'SOUNDS'} timeout={200} classNames='spawn-animation' unmountOnExit>
                <Sounds/>
            </CSSTransition>
            <PomodoroTimer />
        </div>
    );
};

export default Display;