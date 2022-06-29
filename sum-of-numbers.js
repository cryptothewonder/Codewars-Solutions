// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

//solutions
function getSum( a,b ){
    let ans = 0
    if(a!==b && a<b){
      for(let i=a; i<=b; i++){
        ans+= i
      }} else if(a!==b && b<a){
         for(let i=b; i<=a; i++){
        ans+= i
      }} else {
      return a
    }
    return ans//Good luck!
  }

  const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }