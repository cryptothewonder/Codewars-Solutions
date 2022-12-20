//You have to create the function factorial that receives n and returns n!. You have to use recursion.

//solutions
const factorial = n => {
    let ans = n*(n-1)
    if(n==1 || n==0){
      return 1
    } else if (n>1){
      
      return n*factorial(n-1)
    }
};

const factorial = n => n > 1 ? n*factorial(n-1) : 1;