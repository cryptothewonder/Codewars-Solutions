//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


//solutions
function highAndLow(numbers){
    let ans = numbers.split(' ')
    let ans2 = ans.sort((x,y)=> Number(x)-Number(y)).map(x => Number(x))
    return `${ans2[ans2.length-1]} ${ans2[0]}` 
  }

  function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }