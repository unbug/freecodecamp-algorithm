/**
 Search and Replace - https://www.freecodecamp.com/challenges/search-and-replace

 Perform a search and replace on the sentence using the arguments provided and return the new sentence.

 First argument is the sentence to perform the search and replace on.

 Second argument is the word that you will be replacing (before).

 Third argument is what you will be replacing the second argument with (after).

 NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
 */


function myReplace(str, before, after) {
  return str.replace( before, after.replace( /^(\w)/, function($1){
    return /^[A-Z]/.test(before)?$1.toUpperCase():$1.toLowerCase();
  }) );
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
