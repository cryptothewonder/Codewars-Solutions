// You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

//solutions
function eliminateUnsetBits(number) {
    let ans = number.replaceAll('0','')
    return parseInt(Number(ans),2)
  }
  //
  function eliminateUnsetBits(number) {
    return parseInt(number.replace(/0/g,'') || 0, 2)
  }