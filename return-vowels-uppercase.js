//When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

//solutions

function swap (string) {
    let vowels = 'aeiou'
    
    if(string == ""){
      return string
    } else {
    return string.split('').map(function(c){
      return (vowels.indexOf(c)>-1) ? c.toUpperCase() : c
    }).join('')
      }
  }

  function swap(st){
    return st.replace(/[aeiou]/g, v => v.toUpperCase() )
  }//z.