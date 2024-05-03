function Game() {
    let winner = "";
    let Gameboard = {
        "1a":"-",
        "1b":"-",
        "1c":"-",
        4:"-",
        5:"-",
        6:"-",
        7:"-",
        8:"-",
        9:"-",
    };

    function drawGameboard() {
        console.log(`
     a     b     c
        |     |     
  1  ${Gameboard["1a"]}  |  ${Gameboard["1b"]}  |  ${Gameboard["1c"]}  
   _____|_____|_____
        |     |     
  2  ${Gameboard[4]}  |  ${Gameboard[5]}  |  ${Gameboard[6]}  
   _____|_____|_____
        |     |     
  3  ${Gameboard[7]}  |  ${Gameboard[8]}  |  ${Gameboard[9]}  
        |     |     
        `);
    }

    drawGameboard();

    /*Gameboard[0] = prompt("Type a character");
    console.log(Gameboard[0]);*/

    function wincheck() {
        if (Gameboard[0] == Gameboard[1] == Gameboard[2]) {
            console.log("Winner is " + Gameboard[0]);
        }

    }
    return Gameboard;
}



Game();