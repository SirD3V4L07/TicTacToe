

/**
 * Gameboard IIFE
 */
const Gameboard = (function() {
    let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

    const getBoard = () => board;

    const drawGameboard = () => {
        console.log(` ======================== `);
        console.log(` `);
        console.log(` `);
        console.log(` ${board[0]}  |  ${board[1]}  |  ${board[2]} `);
        console.log(`---------------`);
        console.log(` ${board[3]}  |  ${board[4]}  |  ${board[5]} `);
        console.log(`---------------`);
        console.log(` ${board[6]}  |  ${board[7]}  |  ${board[8]} `);
        console.log(` `);
        console.log(` `);
        console.log(` ======================== `);
    };

    const resetBoard = () => {
        board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    };

    const makeMove = (index, mark) => {
        if (board[index] === " ") {
            board[index] = mark;
            return true;
        }
        return false;
    };

    return { getBoard, drawGameboard, makeMove, resetBoard };
})();

/**
 * Player Object
 */
const Player = function(name, mark) {
    return {
        name: name,
        mark: mark,
    };
};

/**
 * Game IIFE
 */
const Game = (function() {
    let playerTurn = false;
    let playCount = 0;

    /**
     * Create Player One
     */
    const playerOne = Player(
        prompt("What's your name?"),
        prompt("What mark would you like to use?")
    );

    /**
     * Create COM opponent
     */
    const playerCOM = Player("COM", "C");

    /**
     * Decide who plays first
     */
    const decideFirst = () => {
        let randomizer = Math.random();
        if (randomizer > 0.5) {
            playerTurn = true;
            console.log(playerOne.name + " will go first!");
        } else {
            playerTurn = false;
            console.log(playerCOM.name + " will go first!");
        }
        return playerTurn;
    };

    /**
     * Main game loop
     */
    const startGame = () => {
        Gameboard.resetBoard();
        decideFirst();
        playCount = 0;
        while (playCount < 9) {
            Gameboard.drawGameboard();
            if (playerTurn) {
                let playerPlay = "";
                while (playerPlay !== "done") {
                    let index = prompt("Choose where to play (1 to 9)") - 1;
                    if (index >= 0 && index < 9 && Gameboard.makeMove(index, playerOne.mark)) {
                        playerPlay = "done";
                    } else {
                        alert("That square is already taken or invalid!");
                    }
                }
                if (checkVictor(playerOne.mark)) {
                    endMatch(playerOne.name);
                    return;
                }
            } else {
                let comPlay = "";
                while (comPlay !== "done") {
                    let index = Math.floor(Math.random() * 9);
                    if (Gameboard.makeMove(index, playerCOM.mark)) {
                        comPlay = "done";
                    }
                }
                if (checkVictor(playerCOM.mark)) {
                    endMatch(playerCOM.name);
                    return;
                }
            }
            playerTurn = !playerTurn;
            playCount++;
        }
        endMatch("draw");
    };

    /**
     * Check for a winner
     */
    const checkVictor = (marker) => {
        const board = Gameboard.getBoard();
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
            if (board[a] === marker && board[b] === marker && board[c] === marker) {
                return true;
            }
        }
        return false;
    };

    /**
     * End match and attribute scores
     */
    const endMatch = (verdict) => {
        Gameboard.drawGameboard();
        switch (verdict) {
            case "draw":
                console.log("It's a draw!");
                break;
            case playerOne.name:
                console.log(playerOne.name + " wins!");
                break;
            case playerCOM.name:
                console.log("You lose..");
                break;
        }
        playCount = 0;
        // Optionally prompt to start a new game
        if (confirm("Do you want to play again?")) {
            startGame();
        }
    };

    return { startGame };
})();

Game.startGame();
