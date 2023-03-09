// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//solutions
function toCamelCase(str){
    let ans = str.split(/[-_]+/)
    for(let i =1; i<ans.length; i++){
      ans[i] = ans[i][0].toUpperCase()+ ans[i].substring(1)
    }
    return ans.join('')
  }

  function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }