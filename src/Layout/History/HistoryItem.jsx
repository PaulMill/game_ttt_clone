import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../UI_Components';

export const HistoryItem = ({ titleText, detailsData, roundResult }) => {
    const [showDetails, setShowDetails] = useState(false);

    const details = showDetails 
        && detailsData 
        && (<div>{detailsData.map(el => (<p key={el.step}>{el.step}: {el.sign}<span>-&gt;</span> <span>({el.coordinates})</span></p>))}</div>);
    
    let footerClassName = "history-item-text_won ";
    let footerText = "TIE";

    if(roundResult.sigh === "O") {
        footerClassName += "playerO-title";
        footerText = "O -&gt; WON";
    } else if(roundResult.sigh === "X") {
        footerClassName += "playerX-title";
        footerText = "X -&gt; WON";
    }
    
    return (
        <li className="history-item">
            <Card 
                title={<p className="history-item-text_title">{titleText}</p>}
                body={details}
                footer={<p className={footerClassName}>{footerText}</p>}
                clicked={() => setShowDetails(!showDetails)}
            />
        </li>
    )
} 
HistoryItem.propTypes = {
    titleText: PropTypes.string.isRequired,
    detailsData: PropTypes.array.isRequired,
    roundResult: PropTypes.object.isRequired
}