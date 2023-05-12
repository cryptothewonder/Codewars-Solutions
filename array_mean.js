// get the mean of an array

//solutions
function getAverage(marks){
    return Math.floor(marks.reduce((x,y)=>x+y)/marks.length)
  }