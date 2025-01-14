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

function checkWin() {

}

/**Main Body */
changeCells(activeSign);

