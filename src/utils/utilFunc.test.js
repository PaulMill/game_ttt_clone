import { 
    GRID_3X3 as initGrid, 
    WINNING_PLAYER as initScore, 
    getChar, 
    checkIfWon, 
    checkIfTies,  
    addScore, 
    resetWonScore 
} from './';

describe('Utility functions', () => {
    const mockWinningGrid = [
        {id: 0, selected: true, selection: "X", isWinning: false},
        {id: 1, selected: false, selection: "", isWinning: false},
        {id: 2, selected: false, selection: "", isWinning: false},
        {id: 3, selected: false, selection: "", isWinning: false},
        {id: 4, selected: true, selection: "X", isWinning: false},
        {id: 5, selected: false, selection: "", isWinning: false},
        {id: 6, selected: false, selection: "", isWinning: false},
        {id: 7, selected: false, selection: "", isWinning: false},
        {id: 8, selected: true, selection: "X", isWinning: false},
    ];
    const mockTiesGrid = [
        {id: 0, selected: true, selection: "O", isWinning: false},
        {id: 1, selected: true, selection: "X", isWinning: false},
        {id: 2, selected: true, selection: "X", isWinning: false},
        {id: 3, selected: true, selection: "X", isWinning: false},
        {id: 4, selected: true, selection: "X", isWinning: false},
        {id: 5, selected: true, selection: "O", isWinning: false},
        {id: 6, selected: true, selection: "O", isWinning: false},
        {id: 7, selected: true, selection: "O", isWinning: false},
        {id: 8, selected: true, selection: "X", isWinning: false},
    ];
    const mockScoreObj = {
        X: { score: 0, isWon: false },
        O: { score: 1, isWon: true },
        T: { score: 0, isWon: false }
    }

    // <---------------- getChar -------------->
    it('getChar pass odd number return X and even numbers return O', () => {
        expect(getChar(2)).toEqual('X');
        expect(getChar(1)).toEqual('O');
        expect(getChar("2")).toEqual('X');
        expect(getChar("1")).toEqual('O');
    })
    it('check if crashed getChar function if not correct data type value', () => {
        expect(getChar({})).toEqual("O");
    })

    // <---------------- checkIfWon -------------->
    it('check function checkIfWon pass grids', () => {
        expect(checkIfWon(mockWinningGrid)).toEqual(['X', [0, 4, 8]]);
        expect(checkIfWon(mockTiesGrid)).toEqual([null, null]);
    })
    it('check function checkIfWon pass empty grid', () => {
        expect(checkIfWon([])).toEqual([null, null]);
    })

    // <---------------- checkIfTies -------------->
    it('check function checkIfTies pass grids', () => {
        expect(checkIfTies(mockTiesGrid)).toBeTruthy();
        expect(checkIfTies(mockWinningGrid)).toBeFalsy();
    })
    it('check function checkIfTies pass empty grid', () => {
        expect(checkIfTies([])).toBeNull();
    })

    // <---------------- addScore -------------->
    it('check function addScore pass char and score', () => {
        expect(addScore('O', initScore)).toEqual(mockScoreObj);
        expect(addScore('T', mockScoreObj)).toEqual({...mockScoreObj, T: { score: 1, isWon: true }});
    })
    it('check function addScore pass empty object', () => {
        expect(addScore('', {})).toBeNull();
    })

    // <---------------- resetWonScore -------------->
    it('check function resetWonScore pass char and score', () => {
        expect(resetWonScore(mockScoreObj)).toStrictEqual({ ...mockScoreObj, O: { score: 1, isWon: false } });
        expect(resetWonScore({...mockScoreObj, O: { score: 2, isWon: true }})).toStrictEqual({ ...mockScoreObj, O: { score: 2, isWon: false } });
    })

})