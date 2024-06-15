/**
 * 
 * Objects:: 
 * -Gameboard:
 *      *Cell 1 = ""
 *      *Cell 2 = ""
 *      *Cell 3 = ""
 *      *Cell 4 = ""
 *      *Cell 5 = ""
 *      *Cell 6 = ""
 *      *Cell 7 = ""
 *      *Cell 8 = ""
 *      *Cell 9 = ""
 * -Player:
 *      *Mark: ""
 *      *Name: ""
 * -Game:
 *      *makeMove
 *      *drawGameboard===
 *      *getBoard===
 *      *checkVictor
 *      *checkEmpty
 *      *selectCharacter
 *      *decideFirst
 *      *roundCount
 *      *matchCount
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

const Player = function(mark,name) {
    return {
        mark: mark,
        name: name,
    }
}

const Game = (function(){
    return {
        
    }
})();