//Find the anonymous function in the given array and use the function to filter the array


//solutions
var FindFunction = function(func, arr) {
    let ans
    for(let i = 0; i<func.length; i++){
      if(typeof func[i]  !== 'number'){
        ans = func[i]
      }
    }
    return arr.filter(ans)//Complete this function
  }

  function FindFunction(func, arr){
    return arr.filter(func.filter(f => typeof f == 'function')[0]);
  }