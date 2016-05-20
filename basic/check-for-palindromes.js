/**
 Check for Palindromes - https://www.freecodecamp.com/challenges/check-for-palindromes

 Return true if the given string is a palindrome. Otherwise, return false.

 A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

 Note
 You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

 We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
 **/


function palindrome(str) {
  var _str = str.match(/[a-zA-Z0-9]/g).join('').replace(/\s/g,'').toLowerCase(),
    s1 = _str.substring(0, _str.length/2),
    s2 = _str.substring(_str.length/2+_str.length%2);

  return s1==s2.split('').reverse().join('');
}



palindrome("eye");
