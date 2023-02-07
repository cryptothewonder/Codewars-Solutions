//Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

//solutions
function sumOfMinimums(arr) {
    let ans = 0
    for (let i=0; i<arr.length; i++){
      ans += Math.min(...arr[i])
    }
    return ans
  }

  function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
  }