//Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

//solutions
function divCon(x){
    let ans = 0;
    for(let i = 0; i<x.length; i++){
      if(x[i]!== String(x[i])){
        ans += x[i]
      } else {
        ans -= Number(x[i])
      }
    }
    return ans
  }

  function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }