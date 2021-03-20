import React, { useState } from 'react';
import { GameWrapper, GameControlsWrapper } from './';
import { WINNING_PLAYER } from '../utils'

export const GameArea = () => {
    const [score, setScore] = useState(WINNING_PLAYER);
    const [roundEnds, setRoundEnds] = useState(false);
    const [resetGrid, setResetGrid] = useState(false);

    return (
        <section className="game-area">
            <GameWrapper score={score} setScore={setScore} resetGrid={resetGrid} setResetGrid={setResetGrid} setRoundEnds={setRoundEnds} />
            <GameControlsWrapper score={score} setScore={setScore} setNewRound={() => setResetGrid(true)} roundEnds={roundEnds} />
        </section>
    )
}