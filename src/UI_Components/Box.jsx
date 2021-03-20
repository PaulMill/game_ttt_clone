import React from 'react';
import PropTypes from 'prop-types';
import { Sign } from './';

export const Box = ({ boxElement, clicked }) => {
    
    const boxClassName = `box ${boxElement.isWinning ? 'box-won' : ''}`

    return (
        <li className={boxClassName} onClick={() => clicked(boxElement)}>
            <Sign char={boxElement.selection} />
        </li>
    )
}

Box.propTypes = {
    boxElement: PropTypes.shape({
            id: PropTypes.number.isRequired,
            selected: PropTypes.bool.isRequired,
            selection: PropTypes.string.isRequired,
            isWinning: PropTypes.bool.isRequired
        }),
    clicked: PropTypes.func
}