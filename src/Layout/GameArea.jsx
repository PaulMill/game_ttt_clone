import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GameWrapper, GameControlsWrapper } from './';
import { WINNING_PLAYER } from '../utils';
import useLocalStorage from '../hooks/useLocalStorage';
import { HistoryArea } from './History';

export const GameArea = ({ showHistory }) => {
    const [score, setScore] = useLocalStorage(WINNING_PLAYER, 'score');
    const [historyData, setHistoryData] = useLocalStorage([], 'historyData');
    const [roundCount, setRoundCount] = useLocalStorage(1, 'round');
    const [roundObj, setRoundObj] = useState({});
    const [roundEnds, setRoundEnds] = useState(false);
    const [resetGrid, setResetGrid] = useState(false);

    const resetHistory = () => {
        setHistoryData([]);
        setRoundCount(1);
        setRoundObj({});
    }

    useEffect(() => {
        if(roundEnds) {
            setHistoryData([...historyData, {...roundObj, round: roundCount.toString()}]);
            setRoundCount(roundCount + 1);
        }
    }, [roundEnds])

    return (
        <div className="game-history_container">
            <section className="game-area">
                <GameWrapper 
                    score={score} 
                    setScore={setScore} 
                    resetGrid={resetGrid} 
                    setResetGrid={setResetGrid} 
                    setRoundEnds={setRoundEnds}
                    setRoundObj={setRoundObj} 
                />
                <GameControlsWrapper 
                    score={score} 
                    setScore={setScore} 
                    resetHistory={resetHistory} 
                    setNewRound={() => setResetGrid(true)} 
                    roundEnds={roundEnds} 
                />
            </section>
            {showHistory && <HistoryArea historyData={historyData} />}
        </div>
    )
}

GameArea.propTypes = {
    showHistory: PropTypes.bool.isRequired
}
