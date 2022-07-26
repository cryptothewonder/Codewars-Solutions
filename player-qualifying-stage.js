// Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

// In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

// Otherwise return, False/false

//solutions
function playerRankUp (points) {
    if (points >= 100) {
      return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
    } else {
      return false;
    }
  }

  function playerRankUp (points){
    return points < 100 ? false : "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
  }