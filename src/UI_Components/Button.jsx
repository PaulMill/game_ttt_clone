import React from "react";
import PropTypes from 'prop-types';

export const Button = ({text, clicked, isActive, color}) => {
    
    const styleActive = isActive ? {
            boxShadow: "0 0 15px " + color,
            border: '2px solid ' + color
        }
        : null ;

    const btnClass = `btn ${isActive ? 'btn-active' : ''}`;

    return (<div style={ styleActive } className={btnClass} onClick={clicked}>{text}</div>)
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    clicked: PropTypes.func,
    isActive: PropTypes.bool.isRequired,
    color: PropTypes.string
}