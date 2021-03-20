import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GRID_3X3, getChar, updateMoves, checkIfWon, addScore, resetWonScore, checkIfTies } from '../utils';
import { Box } from "../UI_Components";

export const GameWrapper = ({ score, setScore, resetGrid, setResetGrid, setRoundEnds, setRoundObj } ) => {
    const [grid, setGrid] = useState(GRID_3X3);
    const [winningGrid, setWinningGrid] = useState([]);
    const [pointer, setPointer] = useState(0);
    const [moves, setMoves] = useState([]);
    const [step, setStep] = useState(1);

    useEffect(() => {
        if(resetGrid) {
            setScore(resetWonScore(score)); // resets player UI classes
            setGrid(GRID_3X3); // reset new grin
            setWinningGrid([]); // reset winning grid to an empty []
            setResetGrid(false); // set grid is already resets
            setRoundEnds(false); // set round starts
            setMoves([]); // reset moves array
            setStep(1); // set initial step
        }
    }, [resetGrid])

    useEffect(() => {
        const [char, comb] = checkIfWon(grid)
        if(char) {
            const newGrid = [...grid];
            newGrid[comb[0]] = {...newGrid[comb[0]], isWinning: true };
            newGrid[comb[1]] = {...newGrid[comb[1]], isWinning: true };
            newGrid[comb[2]] = {...newGrid[comb[2]], isWinning: true };
            
            setRoundObj({ detailsData: moves, result: char }) // set history object
            setWinningGrid(newGrid); // set UI to show winning combination
            setScore(addScore(char, score)); // update winning score
            setRoundEnds(true); // show UI that round is finished
        } else if(checkIfTies(grid)) {
            setRoundObj({ detailsData: moves, result: "" }) // set history object
            setScore(addScore('T', score))
            setRoundEnds(true);
        }
    }, [grid])
    
    const clickHandler = (clickedEl) => {
        if(clickedEl.selected) return; // if already clicked ignore click

        const char = getChar(pointer);
        
        //update grid
        const newGrid = [...grid];
        const index = grid.findIndex((el) => el.id === clickedEl.id);
        newGrid[index] = {...grid[index], id: clickedEl.id, selected: true, selection: char, isWinning: false };
        
        //set moves
        setMoves(updateMoves(moves, newGrid[index].selection, step, newGrid[index].coords))

        setGrid(newGrid);
        setPointer(pointer + 1);
        setStep(prevStep => prevStep + 1);
    }
    const customStyle = winningGrid.length > 0 ? {pointerEvents: 'none'} : null;

    return (
        <ul className="game-wrapper" style={customStyle}>
            { winningGrid.length > 0 
            ? winningGrid.map(box => (<Box key={box.id} boxElement={box} clicked={clickHandler}/>))
            : grid.map(box => (<Box key={box.id} boxElement={box} clicked={clickHandler}/>))}
        </ul>
    )
}


GameWrapper.propTypes = {
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
    resetGrid: PropTypes.bool, 
    setResetGrid: PropTypes.func, 
    setRoundEnds: PropTypes.func,
    setRoundObj: PropTypes.func 
}