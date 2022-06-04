// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//solutions
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

String.prototype.isUpperCase = function () {
    return !/[a-z]/.test(this);
  };