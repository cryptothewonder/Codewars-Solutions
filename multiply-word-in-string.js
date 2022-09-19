// You are to write a function that takes a string as it's first paramter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

//solutions
function modifyMultiply (str,loc,num) {
    let str2= str.split(' ')
    let ans = str2[loc]
    for(let i=1; i<num; i++){
      ans+= '-'+str2[loc]
    }
    return ans
  } 

  function modifyMultiply (str,loc,num) {
    return (str.split(" ")[loc]+"-").repeat(num).slice(0,-1)
  } 