import React, { useState } from 'react';
import { GameWrapper, GameControlsWrapper } from './';
import { WINNING_PLAYER } from '../utils';
import useLocalStarage from '../hooks/useLocalStorage';

export const GameArea = () => {
    const [score, setScore] = useLocalStarage(WINNING_PLAYER, 'score');
    const [roundEnds, setRoundEnds] = useState(false);
    const [resetGrid, setResetGrid] = useState(false);
    const [showGameHistory, setShowGameHistory] = useState(true);

    return (
        <div className="game-history_container">
            <section className="game-area">
                <GameWrapper score={score} setScore={setScore} resetGrid={resetGrid} setResetGrid={setResetGrid} setRoundEnds={setRoundEnds} />
                <GameControlsWrapper score={score} setScore={setScore} setNewRound={() => setResetGrid(true)} roundEnds={roundEnds} />
            </section>
            {showGameHistory && <section className="history-area">
                <h4 className="history-header_text">Game History</h4>
                <ul className="history-list">
                    <li className="history-item">
                        <p className="history-item-text_title">Round 1</p>
                        <p className="history-item-text_won playerX-title">X -&gt; WON</p>
                    </li>
                    <li className="history-item">
                        <p className="history-item-text_title">Round 2</p>
                        <div className="history-item-details">
                            <p>1: X <span>-&gt;</span> <span>(-1; 1)</span></p>
                            <p>2: O <span>-&gt;</span> <span>(0; 0)</span></p>
                            <p>3: X <span>-&gt;</span> <span>(1; 1)</span></p>
                            <p>4: O <span>-&gt;</span> <span>(1; -1)</span></p>
                            <p>5: X <span>-&gt;</span> <span>(-1; -1)</span></p>
                            <p>6: O <span>-&gt;</span> <span>(-1; 0)</span></p>
                            <p>7: X <span>-&gt;</span> <span>(1; 0)</span></p>
                            <p>8: O <span>-&gt;</span> <span>(0; 1)</span></p>
                            <p>9: X <span>-&gt;</span> <span>(0; -1)</span></p>
                        </div>
                        <p className="history-item-text_won playerO-title">O -&gt; WON</p>
                    </li>
                    <li className="history-item"><p>Round 3</p><p>O -&gt; WON</p></li>
                    <li className="history-item"><p>Round 4</p><p>X -&gt; WON</p></li>
                    <li className="history-item"><p>Round 5</p><p>TIE</p></li>
                    <li className="history-item"><p>Round 6</p><p>X -&gt; WON</p></li>
                    <li className="history-item"><p>Round 7</p><p>X -&gt; WON</p></li>
                    <li className="history-item"><p>Round 8</p><p>TIE</p></li>
                    <li className="history-item"><p>Round 9</p><p>X -&gt; WON</p></li>
                    <li className="history-item"><p>Round 10</p><p>X -&gt; WON</p></li>
                    <li className="history-item"><p>Round 111</p><p>X -&gt; WON</p></li>
                    <li className="history-item"><p>Round 222</p><p>TIE</p></li>
                </ul>
            </section>
            }
        </div>
    )
}
