//A latin square is an n × n array filled with the integers 1 to n, each occurring once in each row and column.

// Here are examples of latin squares of size 4 and 7:

//solutions

function makeLatinSquare(n) {
    const array=[]
    for (let i = 1; n>=i; i++ ){
      array.push(i)
    }
    const latianSquare = array.map((el, id, arr)=>{
      return [...arr.slice(id+1), ...arr.slice(0,id+1)]
    }) 
    return latianSquare;
  }