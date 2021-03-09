import React from 'react';
import PropTypes from 'prop-types';
import { HistoryItem } from './';

export const HistoryArea = ({ historyData = [] }) => {
    return (
        <section className="history-area">
            <h4 className="history-header_text">Game History</h4>
            <ul className="history-list">
                {historyData.map(el => <HistoryItem titleText={`Round ${el.round}`} detailsData={el.detailsData} roundResult={el.result}/>)}
            </ul>
        </section>
    )
}
HistoryArea.propTypes = {
    historyData: PropTypes.array
}