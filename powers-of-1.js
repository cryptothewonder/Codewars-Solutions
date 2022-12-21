
// i is the imaginary unit, it is defined by i²=−1i² = -1i²=−1, therefore it is a solution to x²+1=0x² + 1 = 0x²+1=0.

// Your Task
// Complete the function pofi that returns iii to the power of a given non-negative integer in its simplest form, as a string (answer may contain iii).

//solutions
function pofi(n){
    if(n === 0 || n%4===0){
      return '1'
    } else if(n===3 || n%4===3){
      return '-i'
    } else if(n===1 || n%4===1){
      return 'i'
    } else if(n===2 || (n+2)%4===0){
      return '-1'
    } 
  }

  function pofi(n){
    return ["1","i","-1","-i"][n%4];
  }


  //coder's note
  //I'm going to be totally real.  I wasn't sure what this was asking.  I just found the pattern in the answers and made a code based off of that.