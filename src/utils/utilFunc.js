import { WIN_COMBINATION_3X3 } from './'

export const getChar = (movePoint) => {
    return movePoint % 2 === 0 ? "X" : "O";
}

const check = (arrWin, arrGrid, char) => {
    return arrGrid[arrWin[0]].selection === char 
        && arrGrid[arrWin[1]].selection === char 
        && arrGrid[arrWin[2]].selection === char
}

export const checkIfWon = (grid) => {
    if(!Array.isArray(grid) || !grid.length ) return [null, null];

    const charX = 'X';
    const charO = 'O';
    let idx = 0;

    while(idx < WIN_COMBINATION_3X3.length) {

        if(check(WIN_COMBINATION_3X3[idx], grid, charX)) {

            return [charX, WIN_COMBINATION_3X3[idx]];
        } else if (check(WIN_COMBINATION_3X3[idx], grid, charO)) {
            
            return [charO, WIN_COMBINATION_3X3[idx]];
        }
        idx++;
    }
    return [null, null]
}

export const checkIfTies = (grid) => {
    
    if(!Array.isArray(grid) || !grid.length ) return null;

    let isTies = true;

    for(let i = 0; i < grid.length; i++) {
        if(!grid[i].selected){
            isTies = false;
        }
    }
    
    return isTies;
}

export const addScore = (char, current) => {

    if(!current.hasOwnProperty(char) || !char) return null;

    const currentScoreElement = current[char];
    const updatedScoreElement = { score: currentScoreElement.score + 1, isWon: true };
    const newScoreObj = {...current};
    newScoreObj[char] = updatedScoreElement;
    
    return newScoreObj;
}

export const resetWonScore = (current) => {
    const newScoreObj = {...current};
    for(const key in newScoreObj) {
        newScoreObj[key] = {...newScoreObj[key], isWon: false };
    }
    return newScoreObj;
}