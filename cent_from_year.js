// Given a year, return the century it is in.

//solutions
function century(year) {
    let ans = year/100;
    let str = Number(String(ans).slice(0,1))+.01
    if(ans <=str){
      return Math.floor(ans)
    } else {
      return Math.ceil(ans)
    }
  }

  const century = year => Math.ceil(year/100)

  function century(year) {
    return (year + 99) / 100 | 0;
  }