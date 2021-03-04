export const GRID_3X3 = [
    {id: 0, selected: false, selection: "", isWinning: false},
    {id: 1, selected: false, selection: "", isWinning: false},
    {id: 2, selected: false, selection: "", isWinning: false},
    {id: 3, selected: false, selection: "", isWinning: false},
    {id: 4, selected: false, selection: "", isWinning: false},
    {id: 5, selected: false, selection: "", isWinning: false},
    {id: 6, selected: false, selection: "", isWinning: false},
    {id: 7, selected: false, selection: "", isWinning: false},
    {id: 8, selected: false, selection: "", isWinning: false},
];

export const WIN_COMBINATION_3X3 = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

export const WINNING_PLAYER = {
    X: { score: 0, isWon: false },
    O: { score: 0, isWon: false },
    T: { score: 0, isWon: false }
}