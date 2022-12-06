// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

// A Pythagorean Triple consists of arranging 3 integers, such that:

// a2 + b2 = c2


//solutions
function isPythagoreanTriple(integers) {
    integers.sort((x,y)=> x-y)
    return integers[0]**2 + integers[1]**2 === integers[2]**2
  }