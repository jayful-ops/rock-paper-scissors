//This app plays rock-paper-scissors against the computer

//let playerWin = 0
let playerWin = 0
//let computerWin = 0
let computerWin = 0
//let playerSelection
let playerSelection
//let computerSelection
let computerSelection
const rockPaperScissors = ['rock', 'paper', 'scissors']


// CREATE A PLAY FROM THE COMPUTER: 
// 1. create a function 'computerPlay()' that RANDOMLY RETURNS either ‘rock’, ‘paper’ or ‘scissors’
function computerPlay(){
    let result = rockPaperScissors[Math.floor(Math.random()*3)]
    return result
}
// 2. Assign the function to the computer's play: 'computerSelection'
computerSelection = computerPlay()
// 3. console.log(computerSelection) to check that the computer's play works
console.log(computerSelection)


// CREATE A PLAY FROM THE PLAYER: 
// 1. create a function 'playerPlay()' that PROMPTS the player's input: ‘rock’, ‘paper’ or ‘scissors’
function playerPlay(){
    let result = prompt(`Please enter 'rock', 'paper' or 'scissors'`, `e.g: rock`)
    result = result.toLowerCase()
    return result
}
// 2. Assign the function to the player's play: 'playerSelection'
playerSelection = playerPlay()
// 3. 'playerSelection' is CASE-INSENSITIVE: transform player's input toLowerCase
console.log(playerSelection)


// PLAY A SINGLE ROUND (PLAYER vs COMPUTER)
// 1. create a function 'playRound()' that plays a single round
// 2. 'playRound()' takes 2 parameters: 
//     playRound(playerSelection, computerSelection)
// 3. 'playRound()' RETURNS a string that declares the winner
// 4. Added: 'playRound()' displays the score
function playRound(playerSelection, computerSelection){

        if (playerSelection == computerSelection){

            playerWin += 1
            computerWin += 1
            return `This round is a draw! Your pick was ${playerSelection} and the computer's pick was ${computerSelection}.` 

        } else if (playerSelection == 'rock'){
            if(computerSelection == 'scissors'){

                playerWin += 1              
                return `You won the round! ${playerSelection} beats ${computerSelection}` 

            } else {

                computerWin += 1
                return `You lost the round! ${computerSelection} beats ${playerSelection}`         
                
            }
        
        } else if (playerSelection == 'paper') {
            if(computerSelection == 'rock'){

                playerWin += 1  
                return `You won the round! ${playerSelection} beats ${computerSelection}`         

            } else {

                computerWin += 1
                return `You lost the round! ${computerSelection} beats ${playerSelection}`  
                
            }
        
        } else if (playerSelection == 'scissors') {
            if(computerSelection == 'paper'){
                
                playerWin += 1 
                return `You won the round! ${playerSelection} beats ${computerSelection}` 
                
            } else {
                
                computerWin += 1
                return `You lost the round! ${computerSelection} beats ${playerSelection}`  
                
            }
        }
    }
    
    //Who won the round?
    console.log(playRound(playerSelection, computerSelection)) 
    //Show the overall score, in number of wins
    console.log(`Score =>  Player  ${playerWin} : ${computerWin}  Computer`)
    
    
// PLAY A 5-ROUND GAME
// 1. Create a function 'game()' 
// 2. 'game()' has 5-rounds 
// 3. 'game()' keeps score at each round -- use console.log to diplay the results @ each round  
// 4. 'game()' reports a winner or loser AT THE END OF THE GAME

function game(){
    //Come back to complete
}
console.log(`This is an individual round. 
Current Score =>  Player  ${playerWin} : ${computerWin}  Computer`)
