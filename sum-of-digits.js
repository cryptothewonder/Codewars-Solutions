//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//solutions
function digital_root(n) {
    let ans = Array.from(String(n),Number).reduce((a,b) => a+b,0)
    if(String(ans).length>1){
      return digital_root(ans)
    } 
      return ans
      
    
  }