export const GRID_3X3 = [
    {id: 0, selected: false, selection: "", isWinning: false, coords: "-1: 1"},
    {id: 1, selected: false, selection: "", isWinning: false, coords: "0: 1"},
    {id: 2, selected: false, selection: "", isWinning: false, coords: "1: 1"},
    {id: 3, selected: false, selection: "", isWinning: false, coords: "-1: 0"},
    {id: 4, selected: false, selection: "", isWinning: false, coords: "0: 0"},
    {id: 5, selected: false, selection: "", isWinning: false, coords: "1: 0"},
    {id: 6, selected: false, selection: "", isWinning: false, coords: "-1: -1"},
    {id: 7, selected: false, selection: "", isWinning: false, coords: "0: -1"},
    {id: 8, selected: false, selection: "", isWinning: false, coords: "1: -1"},
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

export const MOCK_STORED_HISTORY = [
        {
            round: "1",
            detailsData: [
                {
                    step: "1",
                    sign: "X",
                    coords: "-1; 1"
                },
                {
                    step: "2",
                    sign: "O",
                    coords: "-1; 0"
                },
                {
                    step: "3",
                    sign: "X",
                    coords: "0; 1"
                },
                {
                    step: "4",
                    sign: "O",
                    coords: "0; 0"
                },
                {
                    step: "5",
                    sign: "X",
                    coords: "1; 1"
                }
            ],
            result: {
                sign: "X"
            }
        }
    ] 