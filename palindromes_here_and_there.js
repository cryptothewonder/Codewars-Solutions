// An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.

// Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

//solutions
function convertPalindromes(numbers) {
    let ans = numbers.map(x => {
      return Number(String(x).split('').reverse().join('')) === x
    });
    let ans2 = []
    
    for(let i = 0; i<numbers.length; i++){
      if(ans[i]){
        ans2.push(1)
      } else {
        ans2.push(0)
      }
    }
  return ans2
};

function convertPalindromes(numbers) {
    return numbers.map(str => Number(str.toString() == str.toString().split('').reverse().join('')))
  };