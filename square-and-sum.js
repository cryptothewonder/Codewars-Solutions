//Complete the square sum function so that it squares each number passed into it and then sums the results together.


//solutions
function squareSum(numbers){
    let ans = numbers.map(x => x**2)
    return ans.reduce((x,y)=> x+y,0)
  }