// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

//solutions
function sumCubes(n){
    let ans = []
    for(let i = 0; i<=n; i++){
      ans.push(i**3)
    }
    return ans.reduce((x,y) => x+y,0)
  }

  function sumCubes(n){
    if (n == 1) {
      return n**3;
    } else {
      return n**3 + sumCubes(n - 1);
    }
  }

  function sumCubes(n) {
    return (n * (n + 1) / 2) ** 2;
  }