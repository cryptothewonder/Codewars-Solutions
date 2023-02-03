// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

// For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

//solutions
function covfefe(str){
    if(!str.includes('coverage')){
      return str + " covfefe"
    } else {
     return str.replaceAll("coverage",'covfefe')
    }
  }

  function covfefe(str) {
    const res = str.replace(/coverage/g, "covfefe")
    return res === str ? str + " covfefe" : res
  }