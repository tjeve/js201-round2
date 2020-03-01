// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors (throw1, throw2) {

    if (throw1 === throw2) {
        return 'draw'
    }

    if (throw1 === 'rock'){
        if (throw2 === 'paper') {
            return 'player 2'
        } else if (throw2 === 'scissors') {
            return 'player 1'
        }
    }

    if (throw1 === 'paper'){
        if (throw2 === 'scissors') {
            return 'player 2'
        } else if (throw2 === 'rock') {
            return 'player 1'
        }
    }

    if (throw1 === 'scissors'){
        if (throw2 === 'rock') {
            return 'player 2'
        } else if (throw2 === 'paper') {
            return 'player 1'
        }
    }

}