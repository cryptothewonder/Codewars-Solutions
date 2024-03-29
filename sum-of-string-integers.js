// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

//solutions
function sumOfIntegersInString(s){
  return (s.match(/\d+/g) || []).reduce((x,y)=>Number(x)+Number(y),0)
}

function sumOfIntegersInString(s) {
  return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
}