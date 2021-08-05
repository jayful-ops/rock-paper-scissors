//This app pits a player against the computer in a game of rock-paper-scissors

//---------------> VERSION 2: <---------------
//note: playerPlay() allows 3 opportunities for the player to enter a truthy value in each round (and prompts the player to enter a correct entry if falsy value)
//A valid entry within 3 tries allows for a round to be played and for the game move onto the next chronological round in the game

let computerWin = 0
let playerWin = 0
let playerSelection
let computerSelection
let result
const rockPaperScissors = ['rock', 'paper', 'scissors']
let score = []

// CREATE A PLAY FROM THE COMPUTER: 
computerPlay = () =>{
    result = rockPaperScissors[Math.floor(Math.random()*3)]
    return result
}
// CREATE A PLAY FROM THE PLAYER: 
playerPlay = () => {
    result = prompt(`Please enter one of the following:
    rock
    paper
    scissors`, ``)
    result = result.toLowerCase()

    //is result valid?
    if((result) && (result == 'rock' || result == 'paper' || result == 'scissors')){
        
        return result   
        
    } else {
        //1st time invalid entry 
        result = prompt(`Invalid entry. Please enter one of the following:
        rock
        paper
        scissors`, ``)
        result = result.toLowerCase()
        
        //is result valid this time?
        if(result && (result == 'rock' || result == 'paper' || result == 'scissors')){

        return result    

        } else {
            //2nd time invalid entry
            result = prompt(`Invalid entry. Please enter one of the following:
            rock
            paper
            scissors`, ``)
            result = result.toLowerCase()

            //is result valid this time?
            if((result) && (result == 'rock' || result == 'paper' || result == 'scissors')){
                
            return result

            } else {
                //3rd time invalid entry: 
                gameOver()
            }
        }
    }
}

// CREATE A SINGLE ROUND (PLAYER vs COMPUTER)
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

// CREATE A 5-ROUND GAME
// 'game()' keeps score @ the end of each round 
game = () => {
    for(let i = 0; i < 5; i++){
        let oneRound = playRound(playerSelection, computerSelection)
        score[i] = score.push(oneRound)

        console.log(`Round ${score[i]} =>  Player ${playerWin}:${computerWin} Computer`)
    }

    getFinalScore()
    gameOver()
}
// 'game()' reports a winner or loser @ end of the game
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
//REMATCH? If TRUTHY => play, else 'Thank you message'
gameOver = () => {
    let newGame = prompt(`Would you like to play a new game? 
    yes 
    no`,``)

    newGame = newGame.toLowerCase()

    if(!(newGame) || newGame == 'no'){
        thankYouMessage = `Thank you for playing.`
        console.log(thankYouMessage)
    } else {
        console.log(game())
    }
}

//PLAY THE GAME
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
