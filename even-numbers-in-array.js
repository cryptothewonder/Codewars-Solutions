//Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.


//solutions
function evenNumbers(array, number) {
    let ans = array.filter(x => x % 2===0)
    return ans.slice(ans.length-number)
      
  }