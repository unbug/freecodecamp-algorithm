/**
 Find the Longest Word in a String - https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

 Return the length of the longest word in the provided sentence.

 Your response should be a number.

 **/


function findLongestWord(str) {
  return str.split(' ').reduce(function(a, b){ return a.length>b.length?a:b;}).length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
