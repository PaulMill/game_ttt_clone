import React from 'react';
import PropTypes from 'prop-types';
import { HistoryItem } from './';

export const HistoryArea = ({ historyData }) => {
    if(!historyData.length) {
        return <p>No history data are available</p>
    }
    return (
        <section className="history-area">
            <h4 className="history-header_text">Game History</h4>
            <p style={{fontSize: "1rem", margin: 0}}>Using coordinates on axis (x; y)</p>
            <ul className="history-list">
                {historyData.map(el => <HistoryItem key={el.round} titleText={`Round ${el.round}`} detailsData={el.detailsData} roundResult={el.result}/>)}
            </ul>
        </section>
    )
}
HistoryArea.propTypes = {
    historyData: PropTypes.array
}