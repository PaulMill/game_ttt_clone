import React from 'react';
import PropTypes from 'prop-types';


export const Card = ({title, body, footer, clicked}) => {
    return (
        <div className="card" onClick={clicked}>
            {title}
            {body}
            {footer}
        </div>
    )
}
Card.propTypes = {
    title: PropTypes.element,
    body: PropTypes.element,
    footer: PropTypes.element,
    clicked: PropTypes.func
}