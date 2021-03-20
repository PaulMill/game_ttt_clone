import React from 'react';
import PropTypes from 'prop-types'
import { Button } from '../UI_Components';

export const PageHeader = ({ showHistory, setShowHistory }) => {
    const buttonText = showHistory ? "Hide History" : "Show History"
    return (
        <header className="app-header_container">
            <h1 className="app-header_text">T-T-T Game</h1>
            <div className="app-header_button"><Button text={buttonText} clicked={() => setShowHistory(!showHistory)}/></div>
        </header>
    );
}

PageHeader.propTypes = {
    showHistory: PropTypes.bool.isRequired,
    setShowHistory: PropTypes.func,
}