// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

//solution

function consonantCount(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
   let count = 0;
 
   for (let char of str) {
     if (consonants.includes(char)) {
       count++;
     }
   }
 
   return count;
 }

 function consonantCount(str) {
    return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
  }