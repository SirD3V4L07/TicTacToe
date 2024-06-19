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
 *      *checkEmpty   
 *      *roundCount
 *      *matchCount
 *      *turnController
 *      *makeMove
 *      
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

const Player = function(name,mark) {
    return {
        name: name,
        mark: mark,        
    }
}

const Game = (function(){
    let playerTurn = false;
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
     * Decide who plays first
     */
    const decideFirst = (() => {
        let randomizer = Math.random();
        if (randomizer > 0.5) {
            playerTurn = true;;
        } else {
            playerTurn = false;
        }
        return playerTurn;
    })();

    const makeMove = () => {

    }

    const turnController = () => {

    }

    
    return {decideFirst};
})();

