console.log("Hello world 3");

/**Variables */
let playerSign = "N/A";

/**Functions */
function changeCells(playerSign) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            cell.innerHTML = playerSign;
        });
    });
};

/**Main Body */
changeCells(playerSign);