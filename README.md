# sei

Simple Tic Tac Toe Game

https://allen0lee.github.io/sei-project1/

Technologies used:
1. HTML
2. CSS
3. JavaScript for DOM manipulation

Approach taken:
1. Create 9 boxes and number them 1 to 9
2. Click a box and add a player's symbol(an image) in the box,
   eg. "X" for Player 1, "O" for Player 2
3. Default setting is Player 1 moves first.
4. Checking game winning by comparing the values of boxes that have been clicked
   eg. Win in 1st column: box1 == box2 == box3 == "O" or "X"
       Win in 2nd column: box4 == box5 == box6 == "O" or "X"
       Win in 3rd column: box7 == box8 == box9 == "O" or "X"
       Win in 1st row: box1 == box4 == box7 == "O" or "X" 
       Win in 2nd row: box2 == box5 == box8 == "O" or "X" 
       Win in 3rd row: box3 == box6 == box9 == "O" or "X" 
       Win in 2 diagonals: box1 == box5 == box9 == "O" or "X"
                        or box3 == box5 == box7 == "O" or "X" 
       If none of the above applies, it is a tie game.

To-do items:
1. Allow players to customize their token (X, O, name, picture, avatar etc)
2. Allow game customizable options, time limits, board size, name & profiles etc
3. Use timers to display "waiting..." messages while users are waiting to be matched
4. Player VS AI
5. CSS effects, animations
6. Use LocalStorage or SessionStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
7. Use web audio API and add sound effects
