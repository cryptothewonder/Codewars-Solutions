//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.



//solutions

function fakeBin(x){
    let ans = x.split('')
    for(let i = 0; i<ans.length; i++){
      if(ans[i]<5){
        ans[i] = 0
      } else {
        ans[i] = 1
      }
    }
    return ans.join('')
  }

  function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
