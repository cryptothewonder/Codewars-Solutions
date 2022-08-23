// In this kata, your task is to implement an extended version of the famous rock-paper-scissors game

// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

//solutions
function rpsls(pl1,pl2){
    if (pl1.toLowerCase()==='rock' && pl2.toLowerCase()=== 'scissors' || pl1.toLowerCase()==='rock' && pl2.toLowerCase()=== 'lizard'){
      return 'Player 1 Won!'
    } else if (pl1.toLowerCase()==='scissors' && pl2.toLowerCase()=== 'paper' || pl1.toLowerCase()==='scissors' && pl2.toLowerCase()=== 'lizard') {
      return 'Player 1 Won!'
    } else if (pl1.toLowerCase()==='paper' && pl2.toLowerCase()=== 'rock' || pl1.toLowerCase()==='paper' && pl2.toLowerCase()=== 'spock') {
      return 'Player 1 Won!'
    } else if (pl1.toLowerCase()==='lizard' && pl2.toLowerCase()=== 'paper' || pl1.toLowerCase()==='lizard' && pl2.toLowerCase()=== 'spock')  {
      return 'Player 1 Won!'
    } else if (pl1.toLowerCase()==='spock' && pl2.toLowerCase()=== 'rock' || pl1.toLowerCase()==='spock' && pl2.toLowerCase()=== 'scissors') {
      return 'Player 1 Won!'
    } else if (pl1.toLowerCase()===pl2.toLowerCase()){
      return 'Draw!'
    } else {
      return 'Player 2 Won!'
    }

}

const MATCH = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
  };
  
  
  function rpsls(pl1, pl2) {
    return MATCH[pl1].indexOf(pl2) >= 0 ? 'Player 1 Won!' :
           MATCH[pl2].indexOf(pl1) >= 0 ? 'Player 2 Won!' : 'Draw!';
  }