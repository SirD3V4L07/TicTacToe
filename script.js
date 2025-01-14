console.log("14/01/2025 18.20");

/**Variables */
let activeSign = "N/A";
let playerSign = "N/A";
let comSign = "N/A"
let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

/**Functions */
function changeCells(activeSign) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            board[index] = activeSign;
            cell.innerHTML = board[index];
            console.log(board[index]);
        });
    });
};

function resetBoard()  {
    board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
};

function checkWin(activeSign, board) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] === activeSign && board[b] === activeSign && board[c] === activeSign) {            
            console.log("Winner found");
            return true;
        }
    }
    console.log("No winner yet..");
    return false;
}

/**Main Body */
changeCells(activeSign);

