Notes for next session:
Made some changes but running into another problem now. I meddled with the makeMove() function
and apparently the move prompt keeps triggering asking me for a move, but nothing displays on
the console. Probably running into some sort of infinite loop. The culprit is almost
surely the makeMove() function, as that's what I last changed before I ran into the problem while
trying to fix another issue. Namely, the fact the computer move is disregarded if the random
number doesn't find an empty space on its first try.


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


Logic Structure:
-Draw empty board
-Player selects a sign
-Coin toss to see who goes first
-playerTurn is true or false depending on coin toss
-Call makeMove(playerTurn)
-makeMove will start with a turn check to evaluate who's turn to play
-if player, a coordinate will be requested for the play, if COM, COM will generate a random play
-The end of makeMove always reverses the boolean value of playerTurn
-Repeat makeMove until winner != ""
-In each iteration of makeMove, coordinates are checked for empty before playing
-In each iteration of Play, victory condition and check for winner

Functions:
Game()
Play()
makeMove()
checkWinner()