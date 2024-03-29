// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//solutions
function reverseWords(str) {
    let ans = str.split(' ').map(x => x.split('').reverse().join(''))
    return ans.join(' ')
  }

  function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }