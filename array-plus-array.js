// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

//solutions
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((x,y)=>x+y) + arr2.reduce((x,y)=>x+y); //something went wrong
  }

  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }