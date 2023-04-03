// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

//solution
function contamination(text, char){
    let ans = '';
    if(text == ''){
      return ''
    }  else {
    for(let i = 0; i<text.length; i++){
        ans += char
      }
    return ans
      }
    
  }

  function contamination(text, char){
    return char.repeat(text.length)
  }