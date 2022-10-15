// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// solutions
function findAverage(array) {
    // your code here
    if(array.length === 0){
      return 0
    } else {
    return (array.reduce((x,y) => (x+y),0))/(array.length);
      }
  }

  var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }