console.log("09/01/2025 13:04");

/**Variables */
let playerSign = "N/A";
let board = [1,2,3,4,5,6,7,8,9];

/**Functions */
function changeCells(playerSign) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            board[index] = playerSign;
            cell.innerHTML = board[index];
            console.log(board[index]);
        });
    });
};

/**Main Body */
changeCells(playerSign);

