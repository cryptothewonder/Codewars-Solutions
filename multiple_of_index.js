// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

//solutions
const multipleOfIndex = array => array.filter((x,y) => x % y===0) 
