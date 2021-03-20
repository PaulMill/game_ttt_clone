import React from 'react';
import PropTypes from 'prop-types';
import { Button, PlayerResult } from '../UI_Components';

export const GameControlsWrapper = ({ score, setScore, setNewRound, roundEnds, resetHistory }) => {

    const resetClicked = () => {
        const newScore = {...score};
        for(const key in newScore) {
            newScore[key] = {score: 0, isWon: false};
        }
        resetHistory();
        setScore(newScore);
        setNewRound(true);
    }

    return (
        <div className="game-controls">
            <Button text={'RESET RESULTS'} clicked={resetClicked} isActive={roundEnds} color={'#9500ffb6'}/>
            <PlayerResult textPlayer={'PLAYER (X)'} score={score.X.score} isWon={score.X.isWon} player="X"/>
            <PlayerResult textPlayer={'TIES'} score={score.T.score} isWon={score.T.isWon} player="T" />
            <PlayerResult textPlayer={'PLAYER (O)'} score={score.O.score} isWon={score.O.isWon} player="O" />
            <Button text={'NEW ROUND'} clicked={() => setNewRound(true)} isActive={roundEnds} color={'#7ed200c2'}/>
        </div>
    )
}

GameControlsWrapper.propTypes = {
    score: PropTypes.objectOf(
        PropTypes.shape({
            X: PropTypes.objectOf(
                PropTypes.shape({
                    score: PropTypes.number.isRequired,
                    isWon: PropTypes.bool.isRequired
                })
            ),
            O: PropTypes.objectOf(
                PropTypes.shape({
                    score: PropTypes.number.isRequired,
                    isWon: PropTypes.bool.isRequired
                })
            ),
            T: PropTypes.objectOf(
                PropTypes.shape({
                    score: PropTypes.number.isRequired,
                    isWon: PropTypes.bool.isRequired
                })
            )
        })
    ).isRequired,
    setScore: PropTypes.func,
    setNewRound: PropTypes.func,
    roundEnds: PropTypes.bool.isRequired,
    resetHistory: PropTypes.func
}