function Game() {
    let winner = "";
    let Gameboard = {
        "1a":"-",
        "1b":"-",
        "1c":"-",
        "2a":"-",
        "2b":"-",
        "2c":"-",
        "3a":"-",
        "3b":"-",
        "3c":"-",
    };

    function drawGameboard() {
        console.log(`
     a     b     c
        |     |     
  1  ${Gameboard["1a"]}  |  ${Gameboard["1b"]}  |  ${Gameboard["1c"]}  
   _____|_____|_____
        |     |     
  2  ${Gameboard["2a"]}  |  ${Gameboard["2b"]}  |  ${Gameboard["2c"]}  
   _____|_____|_____
        |     |     
  3  ${Gameboard["3a"]}  |  ${Gameboard["3b"]}  |  ${Gameboard["3c"]}  
        |     |     
        `);
    };

    const player = prompt("Choose your player sign.");
    const computer = "COM";

    function coinToss() {
        let playerTurn = true;
        let firstToPlay = "";
        let randomizer = Math.ceil(Math.random()*2);
        if (randomizer == 1) {
            playerTurn = true;
            firstToPlay = "Player";
        } else {
            playerTurn = false;
            firstToPlay = "COM";
        }
        console.log("The first to play will be: " + firstToPlay);
        return playerTurn;
    }

    coinToss();

    function play() {
        do {
            let move = prompt("Choose a space");
            Gameboard[move] = player;
            drawGameboard();
            console.log("Generating COM move..");
            let comMove = Math.ceil(Math.random() * 9);
            
        } while (winner == "");
        

    }

    function makeMove(subject) {
        switch (comMove) {
            case 1: if (Gameboard["1a"] != "") {
                Gameboard["1a"] = subject;
            };
            break;
            case 2: if (Gameboard["1b"] != "") {
                Gameboard["1b"] = subject;
            };
            break;
            case 3: if (Gameboard["1c"] != "") {
                Gameboard["1c"] = subject;
            };
            break;
            case 4: if (Gameboard["2a"] != "") {
                Gameboard["2a"] = subject;
            };
            break;
            case 5: if (Gameboard["2b"] != "") {
                Gameboard["2b"] = subject;
            };
            break;
            case 6: if (Gameboard["2c"] != "") {
                Gameboard["2c"] = subject;
            };
            break;
            case 7: if (Gameboard["3a"] != "") {
                Gameboard["3a"] = subject;
            };
            break;
            case 8: if (Gameboard["3b"] != "") {
                Gameboard["3b"] = subject;
            };
            break;
            case 9: if (Gameboard["3c"] != "") {
                Gameboard["3c"] = subject;
            };
            break;
        }
    }

    /*drawGameboard();*/

    /*Gameboard[0] = prompt("Type a character");
    console.log(Gameboard[0]);*/

    
}



Game();