//The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.


//solutions
function stantonMeasure(input){
    let ans = input.filter(x => x===1)
    //How to use the ans.length to find how many times that occurs.
    let counter = 0
    input.forEach(x => {
      if(x === ans.length){
        counter += 1
      }
    })
    return counter
  }

  function stantonMeasure(arr) {
    const count = n => arr.filter(x => x === n).length;
    return count(count(1));
  }