//
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.




//solutions
function generateShape(integer){
    let square = ''
    let squared = ''
    for(let i=1; i<= integer; i++){
      square+= '+'
    }
    for(let i=1; i<= integer; i++){
      squared+= square+'\n'
    }
    return squared.substring(0,squared.length-1,)
  }

  function generateShape(n){
    return ("+".repeat(n)+"\n").repeat(n).trim()
  }