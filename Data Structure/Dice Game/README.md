# Dicee-challenge-project
Creating a simple dice challenge game using JavaScript is a fun project. In this game, two players will take turns rolling a six-sided dice, and the player with the highest total score after a certain number of rounds wins.
The scores and current rolls are displayed on the page. The "Reset" button allows you to start a new game. You can customize the game rules and appearance further based on your preferences.
HTML Structure:

The game is created within an HTML structure with two player sections, a "Roll" button, and a "Reset" button.
Each player section has a heading showing the player's number, a display for the player's total score, and a display for the current roll.
JavaScript Logic:

Game variables player1Score and player2Score are initialized to 0. These variables keep track of the total score for each player.
currentPlayer is initialized to 1 to indicate that Player 1 starts the game.
DOM Elements:

JavaScript code accesses various HTML elements using getElementById to manipulate their contents.
player1ScoreElement, player2ScoreElement, player1RollElement, player2RollElement, rollButton, and resetButton are used to access and modify elements on the page.
rollDie Function:

rollDie is a simple function that generates a random number between 1 and 6 to simulate rolling a six-sided die.
Event Listeners:

Event listeners are added to the "Roll" and "Reset" buttons to handle user interactions.
Roll Button Click Event:

When the "Roll" button is clicked, the rollDie function is called to get a random roll.
Depending on the current player, the roll result is displayed in the appropriate player's section and added to their total score.
The currentPlayer is toggled to switch turns between Player 1 and Player 2.
Reset Button Click Event:

When the "Reset" button is clicked, all scores and roll displays are reset to 0, and the game starts over with Player 1.
You can customize this game further by adding features like winning conditions, a message to declare the winner, and more complex game rules. This code is just a starting point for a simple dice challenge game using JavaScript.