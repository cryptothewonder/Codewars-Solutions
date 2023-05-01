// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

//solutions
function array(string) {
    if(string.split(',').length<3){
      return null
    } else{
      return string.split(',').slice(1,string.split(',').length-1).join(' ')
    }
  }

  function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }