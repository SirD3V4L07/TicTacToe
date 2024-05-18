function Game() {
    let winner = "";
    let turns = 1;
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
        drawGameboard();
        do {
            console.log("Going to makeMove()..");
            makeMove();
            console.log("Going to drawGameboard()..");
            drawGameboard();
            console.log("Going to checkWinner()..");
            checkWinner();
            playerTurn = !playerTurn;
            console.log("Player turn: " + playerTurn);
            turns += 1;
            console.log("Turn: " + turns);
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
            
        } 
        else {
            let moveStatus = "";
            do { 
                let move = Math.ceil(Math.random() * 9);
                let subject = computer;
                console.log("Generating COM move..");
                switch (move) {
                    case 1: if (Gameboard["1a"] == "-") {
                        Gameboard["1a"] = subject;
                        moveStatus = "done";
                    };
                    break;
                    case 2: if (Gameboard["1b"] == "-") {
                        Gameboard["1b"] = subject;
                        moveStatus = "done";
                    };
                    break;
                    case 3: if (Gameboard["1c"] == "-") {
                        Gameboard["1c"] = subject;
                        moveStatus = "done";
                    };
                    break;
                    case 4: if (Gameboard["2a"] == "-") {
                        Gameboard["2a"] = subject;
                        moveStatus = "done";
                    };
                    break;
                    case 5: if (Gameboard["2b"] == "-") {
                        Gameboard["2b"] = subject;
                        moveStatus = "done";
                    };
                    break;
                    case 6: if (Gameboard["2c"] == "-") {
                        Gameboard["2c"] = subject;
                        moveStatus = "done";
                    };
                    break;
                    case 7: if (Gameboard["3a"] == "-") {
                        Gameboard["3a"] = subject;
                        moveStatus = "done";
                    };
                    break;
                    case 8: if (Gameboard["3b"] == "-") {
                        Gameboard["3b"] = subject;
                        moveStatus = "done";
                    };
                    break;
                    case 9: if (Gameboard["3c"] == "-") {
                        Gameboard["3c"] = subject;
                        moveStatus = "done";
                    };
                    break;
                }
            } while (moveStatus != "done");
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
            } else {
                if (turns >= 9) {
                    console.log("It's a draw!");
                    winner = "None";
                }                
            }
            return winner;
    }

    
}



Game();