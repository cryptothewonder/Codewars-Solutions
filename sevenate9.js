// Write a function that removes every lone 9 that is inbetween 7s.
//solutions
function sevenAte9(str){
    return str.replace(/79(?=7)/g, '7');
  }