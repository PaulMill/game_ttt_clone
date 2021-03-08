import React, { useState } from 'react';
import { GameWrapper, GameControlsWrapper } from './';
import { WINNING_PLAYER } from '../utils';
import useLocalStarage from '../hooks/useLocalStorage';

export const GameArea = () => {
    const [score, setScore] = useLocalStarage(WINNING_PLAYER, 'score');
    const [roundEnds, setRoundEnds] = useState(false);
    const [resetGrid, setResetGrid] = useState(false);

    return (
        <section className="game-area">
            <GameWrapper score={score} setScore={setScore} resetGrid={resetGrid} setResetGrid={setResetGrid} setRoundEnds={setRoundEnds} />
            <GameControlsWrapper score={score} setScore={setScore} setNewRound={() => setResetGrid(true)} roundEnds={roundEnds} />
        </section>
    )
}