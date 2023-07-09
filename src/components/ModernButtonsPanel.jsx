import {React, useState} from 'react';
import '../styles/modernButtonsPanel.pcss';
import { useDispatch } from 'react-redux';


const ModernButton = (props) => {
    const [activeButtonStyle, setActiveButtonStyle] = useState({});
    const dispatch = useDispatch();

    const onButtonClick = (action, index) => {
        dispatch(action());  
        setActiveButtonStyle({transform: 'translate(' + ((index * 150)).toString() + 'px, -50%)'});
    };

    let buttons = [];
    props.buttons.forEach((element, index)  => {
        buttons.push(<div onClick={() => onButtonClick(element.action, index)} key={index} className='button__text'>{element.title}</div>);
    });
    return (
        <nav className='panel'>
            {buttons}
            <div className='panel__border' style={activeButtonStyle}></div>
        </nav>
    );
};

export default ModernButton;