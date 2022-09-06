// Given a non-empty array of integers, return the result of multiplying the values together in order.

//solutions

function grow(x){
    return x.reduce((x, y) => x*y, 1);
  }

const grow=x=> x.reduce((a,b) => a*b);