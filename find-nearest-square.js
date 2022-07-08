//Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

//solutions
function nearestSq(n){
    return Math.round(Math.sqrt(n))**2
      // your code
  }

  const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);