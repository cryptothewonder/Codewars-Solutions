//return number in descending order
//solutions
function descendingOrder(n){
    let ans = String(n).split('').map(x => Number(x))
     let ans2 = ans.sort((a,b) => b-a).map(x => String(x))
     return Number(ans2.join(''))
 } 

 function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }