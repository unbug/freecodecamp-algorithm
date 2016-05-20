/**
 Title Case a Sentence - https://www.freecodecamp.com/challenges/title-case-a-sentence

 Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

 For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

 */

function titleCase(str) {
  function up(str){
    return str.replace(/^(\w)/,function($1){
      return $1.toUpperCase();
    });
  }
  return str.toLowerCase().split(' ').reduce(function(a, b){
    return up(a)+' '+up(b);
  });
}

titleCase("I'm a little tea pot");
