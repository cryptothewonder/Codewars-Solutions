//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.


//solutions
function divisibleBy(numbers, divisor){
    let ans = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % divisor === 0) {
        ans.push(numbers[i]);
      }
    }
    return ans;
  }

  function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
  }