//This app plays rock-paper-scissors against the computer

//let playerWin = 0
//let computerWin = 0
//let playerSelection
//let computerSelection


// CREATE A PLAY FROM THE COMPUTER: 
// 1. create a function 'computerPlay()' that RANDOMLY RETURNS either ‘rock’, ‘paper’ or ‘scissors’
// 2. Assign the function to the computer's play: 'computerSelection'
// 3. console.log(computerSelection) to check that the computer's play works


// CREATE A PLAY FROM THE PLAYER: 
// 1. create a function 'playerPlay()' that PROMPTS the player's input: ‘rock’, ‘paper’ or ‘scissors’
// 2. Assign the function to the player's play: 'playerSelection'
// 3. 'playerSelection' is CASE-INSENSITIVE: transform player's input toLowerCase


// PLAY A SINGLE ROUND (PLAYER vs COMPUTER)
// 1. create a function 'playRound()' that plays a single round
// 2. 'playRound()' takes 2 parameters: 
//     playRound(playerSelection, computerSelection)
// 3. 'playRound()' RETURNS a string that declares the winner
// 4. if (playerSelection == computerSelection){
//      return result = `Draw! Your pick was ${playerSelection} and the computer's pick was         
//                       ${computerSelection}` 
//       playerWin += 1
//       computerWin += 1
//     } else if (playerSelection > computerSelection){
//      return result = `You won! ${playerSelection} beats ${computerSelection}`         
//       playerWin += 1              
//     } else {
//      return result = `You lost! ${computerSelection} beats ${playerSelection}`         
//       computerWin += 1    
//     }


// PLAY A 5-ROUND GAME
// 1. Create a function 'game()' 
// 2. 'game()' has 5-rounds 
// 3. 'game()' keeps score at each round -- use console.log to diplay the results @ each round  
// 4. 'game()' reports a winner or loser AT THE END OF THE GAME