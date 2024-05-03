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

    drawGameboard();

    const player = prompt("Choose your player sign.");
    const computer = "C";

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

    let playerTurn = coinToss();

    function play() {
        do {
            console.log("Going to makeMove()..");
            makeMove();
            console.log("Going to drawGameboard()..");
            drawGameboard();
            console.log("Going to checkWinner()..");
            checkWinner();
            playerTurn = !playerTurn;
        } while (winner == "");
    }

    play();
    console.log("Winner is " + winner);

    function makeMove() {
        if (playerTurn == true) {
            
            for (i = 0; i > -1; i++) {
                let move = prompt("Choose a space (eg: 1c)");
                if (Gameboard[move] == "-") {
                    Gameboard[move] = player;
                    i = -2;
                } else {
                    console.log("Invalid move!");
                }
            }            
            
            let subject = player;
            switch (move) {
                case "1a": if (Gameboard["1a"] != "") {
                    Gameboard["1a"] = subject;
                };
                break;
                case "1b": if (Gameboard["1b"] != "") {
                    Gameboard["1b"] = subject;
                };
                break;
                case "1c": if (Gameboard["1c"] != "") {
                    Gameboard["1c"] = subject;
                };
                break;
                case "2a": if (Gameboard["2a"] != "") {
                    Gameboard["2a"] = subject;
                };
                break;
                case "2b": if (Gameboard["2b"] != "") {
                    Gameboard["2b"] = subject;
                };
                break;
                case "2c": if (Gameboard["2c"] != "") {
                    Gameboard["2c"] = subject;
                };
                break;
                case "3a": if (Gameboard["3a"] != "") {
                    Gameboard["3a"] = subject;
                };
                break;
                case "3b": if (Gameboard["3b"] != "") {
                    Gameboard["3b"] = subject;
                };
                break;
                case "3c": if (Gameboard["3c"] != "") {
                    Gameboard["3c"] = subject;
                };
                break;
            }
        } else {
            let move = Math.ceil(Math.random() * 9);
            let subject = computer;
            console.log("Generating COM move..");
            switch (move) {
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

        
    }

    function checkWinner() {
        if (
            ((Gameboard["1a"] != "-") && (Gameboard["1a"] == Gameboard["1b"]) && (Gameboard["1a"] == Gameboard["1c"])) ||
            ((Gameboard["2a"] != "-") && (Gameboard["2a"] == Gameboard["2b"]) && (Gameboard["2a"] == Gameboard["2c"])) ||
            ((Gameboard["3a"] != "-") && (Gameboard["3a"] == Gameboard["3b"]) && (Gameboard["3a"] == Gameboard["3c"])) ||
            ((Gameboard["1a"] != "-") && (Gameboard["1a"] == Gameboard["2a"]) && (Gameboard["1a"] == Gameboard["3a"])) ||
            ((Gameboard["1b"] != "-") && (Gameboard["1b"] == Gameboard["2b"]) && (Gameboard["1b"] == Gameboard["3b"])) ||
            ((Gameboard["1c"] != "-") && (Gameboard["1c"] == Gameboard["2c"]) && (Gameboard["1c"] == Gameboard["3c"])) ||
            ((Gameboard["1a"] != "-") && (Gameboard["1a"] == Gameboard["2b"]) && (Gameboard["1a"] == Gameboard["3c"])) ||
            ((Gameboard["1c"] != "-") && (Gameboard["1c"] == Gameboard["2b"]) && (Gameboard["1c"] == Gameboard["3a"])) 
            ) {
                if (playerTurn == true) {
                    winner = player;
                } else {
                    winner = computer;
                }
            }
            return winner;
    }

    
}



Game();