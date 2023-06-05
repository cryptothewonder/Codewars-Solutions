//solutions
const reverseSeq = n => {
    let ans = []
    while(n>0){
      ans.push(n)
      n=n-1
    }
    return ans
  };