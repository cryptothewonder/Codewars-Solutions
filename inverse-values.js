//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//solutions

function invert(array) {
    return array.map(x => -1*x);
 }

 const invert = array => array.map(num => -num);