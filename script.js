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
 *      *drawGameboard
 *      *checkVictor
 *      *checkEmpty
 *      *selectCharacter
 *      *decideFirst
 *      *roundCount
 *      *matchCount
 *      
 */

const Gameboard = (function(){
    return {
        cell1:"",
        cell2:"",
        cell3:"",
        cell4:"",
        cell5:"",
        cell6:"",
        cell7:"",
        cell8:"",
        cell9:"",
    }
})();

const Player = function(mark,name) {
    
}