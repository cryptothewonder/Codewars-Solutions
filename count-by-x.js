// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

//solutions
function countBy(x, n) {
    let ans = []
    for(let i=x; i<= n*x; i+=x){
      ans.push(i)
    }
    return ans
    
  }

  function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}