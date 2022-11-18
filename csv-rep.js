// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

//solutions
function toCsvText(array) {
    let ans = ''
    for (let i = 0;i<array.length; i++){
      ans += array[i].toString()+'\n'
    }
    return ans.slice(0,ans.length-1)// good luck 
    0
  }


function toCsvText(array) {
    return array.join('\n');
 }