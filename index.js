//This app pits a player against the computer in a game of rock-paper-scissors

//---------------> VERSION 2: <---------------
let computerWin = 0
let playerWin = 0
let playerSelection
let computerSelection
let result
const rockPaperScissors = ['rock', 'paper', 'scissors']
let score = []

// generate random play from the computer: 
computerPlay = () =>{
    result = rockPaperScissors[Math.floor(Math.random()*3)]
    return result
}
// accept input play from the player (prompt valid entry)
playerPlay = () => {
    result = prompt(`Please enter one of the following:
    rock
    paper
    scissors`, ``)
    result = result.toLowerCase()

    // WHILE 'player_input is invalid', provide player with 5 tries for valid input in each round.
    let counter = 0
    while( !(result) || !((result == 'rock') || (result == 'paper') || (result == 'scissors')) ){
        counter++
        result = prompt(`Invalid entry. Please enter one of the following:
        rock
        paper
        scissors`, ``)
        result = result.toLowerCase()
            if(counter === 5){
                break;
            }            
    }//close while-loop 


    // if player input is valid, break out of the while-loop with correct input value 
    if( (result)  &&  ((result == 'rock') || (result == 'paper') || (result == 'scissors')) ) {

        return  result
                
    } 

} 

// create a single round (player vs computer)
playRound = (playerSelection, computerSelection) => {
    //computer plays
    computerSelection = computerPlay()
    console.log(computerSelection)
    //player plays
    playerSelection = playerPlay()
    console.log(playerSelection)
    
        if(playerSelection == computerSelection){    
            playerWin += 1
            computerWin += 1
            result = `This round is a draw! Your pick was ${playerSelection} and the computer's pick was ${computerSelection}.` 
            console.log(result) 
        
        } else if(playerSelection == 'rock'){
                if(computerSelection == 'scissors'){
                    
                    playerWin += 1              
                    result = `You won the round! ${playerSelection} beats ${computerSelection}` 
                    console.log(result) 
            
                } else{

                    computerWin += 1
                    result = `You lost the round! ${computerSelection} beats ${playerSelection}`   
                    console.log(result)                  
                }
        
        } else if(playerSelection == 'paper') {
                if(computerSelection == 'rock'){
                    
                    playerWin += 1  
                    result = `You won the round! ${playerSelection} beats ${computerSelection}`  
                    console.log(result) 

                } else{
                    computerWin += 1
                    result = `You lost the round! ${computerSelection} beats ${playerSelection}`  
                    console.log(result) 
                }    

        } else if(playerSelection == 'scissors'){
                if(computerSelection == 'paper'){
                    
                    playerWin += 1 
                    result = `You won the round! ${playerSelection} beats ${computerSelection}`  
                    console.log(result)                     
                } else{
                    computerWin += 1
                    result = `You lost the round! ${computerSelection} beats ${playerSelection}`  
                    console.log(result) 
                }    
        } 
}

// create a 5-rounds game
// 'game()' keeps score @ the end of each round 
game = () => {
    for(let i = 0; i < 5; i++){
        let oneRound = playRound(playerSelection, computerSelection)
        score[i] = score.push(oneRound)

        console.log(`Round ${score[i]} =>  Player ${playerWin}:${computerWin} Computer`)
    }
    
    getFinalScore()
    score = [] //reset the score
    playerWin = 0 //reset number of player wins
    computerWin = 0 //reset number of computer wins
    gameOver() // gameOver() can now restart the game if needed
}

getFinalScore = () => {
    if(playerWin > computerWin){
        let finalScore = 
        `
        You beat the computer!!!

        Final Score:
        Player ${playerWin}:${computerWin} Computer
        `        
        console.log(finalScore)

    } else {
        let finalScore = 
        `
        You lost to the computer :-(

        Final Score:
        Player ${playerWin}:${computerWin} Computer
        `
        console.log(finalScore)
    }
}

//rematch? 'if' truthy => play new game , 'else' => 'Thank you for playing'-message
gameOver = () => {
    let newGame = prompt(`Would you like to play a new game? 
    yes 
    no`,``)

    newGame = newGame.toLowerCase()

    if(!(newGame) || newGame == 'no'){
        //stop the game
        thankYouMessage = `Thank you for playing.`
        console.log(thankYouMessage)
    } else {
        //re-initialize the game
        game()
    }
}

//play the game
game()


//---------------> VERSION 1: <---------------
// let computerWin = 0
// let playerWin = 0
// let playerSelection
// let computerSelection
// let result
// const rockPaperScissors = ['rock', 'paper', 'scissors']
// let score = []

// // CREATE A PLAY FROM THE COMPUTER: 
// function computerPlay(){
//     result = rockPaperScissors[Math.floor(Math.random()*3)]
//     return result
// }
// // CREATE A PLAY FROM THE PLAYER: ’
// function playerPlay(){
//     result = prompt(`Please enter 'rock', 'paper' or 'scissors'`, `e.g: rock`)
//     result = result.toLowerCase()
//     return result 
// }

// // CREATE A SINGLE ROUND (PLAYER vs COMPUTER)
// function playRound(playerSelection, computerSelection){
    
//     computerSelection = computerPlay()
//     console.log(computerSelection)

//     playerSelection = playerPlay()
//     console.log(playerSelection)

//     if(playerSelection == computerSelection){    
//         playerWin += 1
//         computerWin += 1
//         result = `This round is a draw! Your pick was ${playerSelection} and the computer's pick was ${computerSelection}.` 
//         console.log(result) 
    
//     } else if(playerSelection == 'rock'){
//             if(computerSelection == 'scissors'){
                
//                 playerWin += 1              
//                 result = `You won the round! ${playerSelection} beats ${computerSelection}` 
//                 console.log(result) 
        
//             } else{

//                 computerWin += 1
//                 result = `You lost the round! ${computerSelection} beats ${playerSelection}`   
//                 console.log(result)                  
//             }
    
//     } else if(playerSelection == 'paper') {
//             if(computerSelection == 'rock'){
                
//                 playerWin += 1  
//                 result = `You won the round! ${playerSelection} beats ${computerSelection}`  
//                 console.log(result) 

//             } else{
//                 computerWin += 1
//                 result = `You lost the round! ${computerSelection} beats ${playerSelection}`  
//                 console.log(result) 
//             }    

//     } else if(playerSelection == 'scissors'){
//             if(computerSelection == 'paper'){
                
//                 playerWin += 1 
//                 result = `You won the round! ${playerSelection} beats ${computerSelection}`  
//                 console.log(result)                     
//             } else{
//                 computerWin += 1
//                 result = `You lost the round! ${computerSelection} beats ${playerSelection}`  
//                 console.log(result) 
//             }    
//     }
// }

// // CREATE A 5-ROUND GAME
// // 'game()' keeps score @ the end of each round 
// function game(){
//     for(let i = 0; i < 5; i++){
//         let oneRound = playRound(playerSelection, computerSelection)
//         score[i] = score.push(oneRound)

//         console.log(`Round ${score[i]} =>  Player ${playerWin}:${computerWin} Computer`)
//     }

//     getFinalScore()
//     gameOver()
// }
// // 'game()' reports a winner or loser @ end of the game
// function getFinalScore(){
//     if(playerWin > computerWin){
//         let finalScore = 
//         `
//         You beat the computer!!!

//         Final Score:
//         Player ${playerWin}:${computerWin} Computer
//         `        
//         console.log(finalScore)

//     } else {
//         let finalScore = 
//         `
//         You lost to the computer :-(

//         Final Score:
//         Player ${playerWin}:${computerWin} Computer
//         `
//         console.log(finalScore)
//     }
// }
// //REMATCH? If TRUTHY => play, else 'Thank you message'
// function gameOver(){
//     let newGame = prompt('Would you like" to play a new game?','')

//     if(newGame){
//         console.log(game())
//     } else {
//         thankYouMessage = `Thank you for playing.`
//         console.log(thankYouMessage)
//     }
// }

// //PLAY THE GAME
// game()
