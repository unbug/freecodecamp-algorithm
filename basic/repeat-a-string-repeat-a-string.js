/**
 Repeat a string repeat a string - https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

 Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.
 */


function repeatStringNumTimes(str, num) {
  return num>=0?Array(num+1).join(str):'';
}

repeatStringNumTimes("abc", 3);
