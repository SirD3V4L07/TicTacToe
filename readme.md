Notes for next session: Next step is to add play count to makeMove() to check for 9 plays, if no winner, run endMatch(draw), to declare a draw. endMatch will also print winner and draw messages, and count rounds and match count.


Requirements:
-Use block scoping. (let and const are scoped inside the closest curly brackets)
-Use closures (Use functions as objects with subfunctions that act as methods in order to prevent access to variables inside the functions, while still being able to use the variables for their intended purpose)
-Use factory functions (unlike Constructor functions, Factory functions use Return to create a method inside the function as an object, and therefore don't use the prototype. By using factory functions you're basically already using closures and block scoping)
-IIFE (immediately invoked function expression). Basically, for functions that only run once, run them as they're declared.


To-do List:
-Store the gameboard as an array inside of a Gameboard object
-Players are also going to be stored in objects
-As little global code as possible. Try tucking as much as you can inside factories.
-Each little piece of functionality should be able to fit in the game, player or gameboard objects.
-Focus on getting a working game in the console first.
-Make sure you include logic that checks for when the game is over! 
-Try to avoid thinking about the DOM and your HTML/CSS until your game is working.
-Once you have a working console game, create an object that will handle the display/DOM logic.
-Write the functions that allow players to add marks to a specific spot on the board by interacting with the appropriate DOM elements (e.g. letting players click on a board square to place their marker). Don’t forget the logic that keeps players from playing in spots that are already taken!
-Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that shows the results upon game end!


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