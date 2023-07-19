import {React, useState, useRef, useEffect} from 'react';
import '../styles/modernButtonsPanel.pcss';

const ModernButton = (props) => {
    const [activeButtonStyle, setActiveButtonStyle] = useState({});
    const buttonRefs = [];
    const borderRef = useRef(null);

    const onButtonClick = (dispatch, action, index) => {
        dispatch(action());

        let leftSpacing = 0;
        for( let i = 0; i < index; i++) {
            leftSpacing += buttonRefs[i].current.offsetWidth + 75;
        }
        setActiveButtonStyle({transform: 'translate(' + ( leftSpacing).toString() + 'px, -50%)'});
        borderRef.current.style.width = (buttonRefs[index].current.offsetWidth + 20).toString() + 'px';
    };

    useEffect(() => {
        borderRef.current.style.width = (buttonRefs[0].current.offsetWidth + 20).toString() + 'px';
    }, []);

    let buttons = [];
    props.buttons.forEach((element, index)  => {
        buttonRefs.push(useRef(null))
        buttons.push(
        <div onClick={
                () => {
                    onButtonClick(element.dispatch, element.action, index)
                }}
                key={index}
                ref={buttonRefs.slice(-1)[0]}
                className='button__text'>
            {element.title}
        </div>);
    });
    return (
        <div className='panel'>
            {buttons}
            <div ref={borderRef} className='panel__border' style={activeButtonStyle}></div>
        </div>
    );
};

export default ModernButton;