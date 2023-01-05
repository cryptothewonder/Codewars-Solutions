// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

// You solution should return an array [smallest, minimumAbsent, largest]

// The smallest integer should be the integer from the array with the lowest value.

// The largest integer should be the integer from the array with the highest value.

// The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

//solutions
function minMinMax(array) {
    let ans = array.sort((x,y)=>x-y)
    let ans2
    for(let i = ans[0]; i<ans[ans.length-1];i++){
      if(ans.indexOf(i)===-1){
        ans2 = i;
        break
      }
    }
    return [ans[0],ans2,ans[ans.length-1]]

}

minMinMax=(array)=> {
    b = Math.min(...array)
    while (array.includes(b) == true){b += 1}
    return [Math.min(...array),b,Math.max(...array)]
  }