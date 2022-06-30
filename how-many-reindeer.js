//Complete the function reindeers(), which takes a number of presents and returns the minimum numbers of required reindeers. If the number of presents is too high, throw an error.

//solutions
function reindeers(presents) {
    //every new reindeer can hold 30 presents.
  //max is 180 presents because 6*30 = 180 and the two reindeer needed for the sleigh don't count.
  //anything 1-30 requires at least 3
  if(presents === 0){
    return 2
  } else if(presents<=30){
    return 3
  } else if(presents<=60){
    return 4 
  } else if(presents<=90){
    return 5
  } else if(presents<=120){
    return 6
  } else if(presents<=150){
    return 7
  } else if(presents<=180){
    return 8
  } else {
    return error
  }
}

function reindeers(presents) {
    if (presents > 180) throw 'Too many presents!';
    return Math.ceil(presents / 30) + 2;
  }