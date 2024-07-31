/**
 * 
 * Objects:: 
 * -Gameboard: ===
 *      *Cell 1 = "" ===
 *      *Cell 2 = "" ===
 *      *Cell 3 = "" ===
 *      *Cell 4 = "" ===
 *      *Cell 5 = "" ===
 *      *Cell 6 = "" ===
 *      *Cell 7 = "" ===
 *      *Cell 8 = "" ===
 *      *Cell 9 = "" ===
 * -Player:  ===
 *      *Mark: "" ===
 *      *Name: "" ===
 * -Game:
 *      *createPlayer===
 *      *drawGameboard===
 *      *getBoard===
 *      *selectCharacter===
 *      *decideFirst===
 *      *checkVictor
 *      *roundCount
 *      *matchCount
 *      *makeMove===
 *      
 */



/**
 * Gameboard IIFE
 */
const Gameboard = (function(){
    let board = [" "," "," "," "," "," "," "," "," "];

    const getBoard = () => board;

    const drawGameboard = () => {
        console.log(` ${board[0]}  |  ${board[1]}  |  ${board[2]} `);
        console.log(`---------------`);
        console.log(` ${board[3]}  |  ${board[4]}  |  ${board[5]} `);
        console.log(`---------------`);
        console.log(` ${board[6]}  |  ${board[7]}  |  ${board[8]} `);
    }

    return {getBoard, drawGameboard}

})();

/**
 * Player Object
 */
const Player = function(name,mark) {
    return {
        name: name,
        mark: mark,        
    }
}


/**
 * Game IIFE ========================================================================== <
 * A Game is an instance which begins by asking for the player name. 
 */
const Game = (function(){
    let playerTurn = false;
    let playCount = 0;
    console.log("Triggered Game() function");

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
     * Match Function IIFE
     */
    const Match = (() => {
        /**
        * Decide who plays first (IIFE)
        */
        const decideFirst = (() => {
            let randomizer = Math.random();
            if (randomizer > 0.5) {
                playerTurn = true;
                console.log(playerOne.name + " will go first!")
            } else {
                playerTurn = false;
                console.log(playerCOM.name + " will go first!")
            }
            
            return playerTurn;
        })();

        
    })();



    /**
     * Make move (IIFE)
     */
    const makeMoves = (() => {
        console.log("entered makemove playerTurn = " + playerTurn);
        for (let i = 0; i < 9; i++) {
            if (playerTurn == false) {
                let comPlay = "";
                while(comPlay != "done") {
                    comPlay = Math.floor(Math.random()*9);
                    if (board[comPlay] == " ") {
                        board[comPlay] = playerCOM.mark;
                        comPlay = "done";
                    }
                }
                if (checkVictor(playerCOM.mark)) {
                    endMatch(playerCOM.name);
                    return;
                };
                playerTurn = !playerTurn;
            } 
            else if (playerTurn == true) {
                let playerPlay = "";
                while(playerPlay != "done") {
                    playerPlay = prompt("Choose where to play (1 to 9)");
                    if (board[playerPlay - 1] == " ") {
                        board[playerPlay - 1] = playerOne.mark;
                        playerPlay = "done";
                    } 
                    else {
                        alert("That square is already taken!");
                    }
                }
                if (checkVictor(playerOne.mark)) {
                    endMatch(playerOne.name);
                    return;
                };
                playerTurn = !playerTurn;
            }
        }
        endMatch("draw");    
    })();

    /**
     * Check for a winner
     */
    const checkVictor = (marker) => {
        
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
            if (getBoard[a] === marker && getBoard[b] === marker && getBoard[c] === marker) {
                return true;
            }
        }
        return false;

    }

    /**
     * End match and attribute scores 
     */
    const endMatch = (verdict) => {

        switch (verdict) {
            case "draw": 
                console.log("It's a draw!");
                break;
            case playerOne.name: 
                console.log(playerOne.name + " wins!");
                playCount = 0;
                break;
            case playerCOM.name: 
                console.log("You lose..");
                playCount = 0;
                break;
        }
    }
    
    return {makeMoves};
})();
/**
 * Game IIFE ========================================================================== >
 */
