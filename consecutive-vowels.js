//You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from 'a'. Keep in mind that the consecutive vowel to 'u' is 'a' and the cycle continues.

// Return an integer with the length of the consecutive vowels found.

//solutions
const getTheVowels = (word, vowels = 'aeiou') =>
  word
    .split('')
    .reduce((count, char) => count + (char === vowels[count % vowels.length]), 0)