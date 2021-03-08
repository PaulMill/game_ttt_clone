import React from 'react';
import PropTypes from 'prop-types';

export const PlayerResult = ({textPlayer, score, isWon, player}) => {
    const textClass = `player-result-wrapper ${isWon ? 'player-won' : ''}`;
    const styleWinScore = isWon ? { textShadow: "0 0 1em #e7ffc4" } : null;
    const playerTitleClassName = player === "X" ? "player playerX-title" : player === "O" ? "player playerO-title" : "player"
    return (
        <div className={textClass}>
            <p className={playerTitleClassName}>{textPlayer}</p>
            <p style={styleWinScore} className="score">{score}</p>
          </div>
    )
}

PlayerResult.propTypes = {
    textPlayer: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    isWon: PropTypes.bool.isRequired,
    player: PropTypes.string
};