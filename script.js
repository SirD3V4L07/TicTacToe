console.log("Hello world 3");

let playerSign = "N/A";


function changeCells(playerSign) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            cell.innerHTML = playerSign;
        });
    });
};

changeCells(playerSign);