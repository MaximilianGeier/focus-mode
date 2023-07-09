import React from 'react';
import '../styles/display.pcss';
import { useSelector } from 'react-redux'

const Display = () => {
    const currentPage = useSelector((state) => state.currentPage.value);

    return (
        <div className={currentPage === 'SOUNDS' ? 'display drop' : 'display'}>
        </div>
    );
};

export default Display;