// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

//solutions
var isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort().join() === original.toLowerCase().split('').sort().join();
  };

  String.prototype.sortLetters = function() {
    return this.toLowerCase().split('').sort().join('');
  }
  
  var isAnagram = function(test, original) {
    return test.sortLetters() == original.sortLetters();
  };