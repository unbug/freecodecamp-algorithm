/**

 Pig Latin  - https://www.freecodecamp.com/challenges/pig-latin

 Translate the provided string to pig latin.

 Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

 If a word begins with a vowel you just add "way" to the end.
 */


function translatePigLatin(str) {
  var reg = new RegExp(/A|E|I|O|U/ig),
    lt = reg.exec(str)[0],
    idx = reg.lastIndex-1,
    res = [];
  res.push(str.substr(idx));
  if(idx)
    res.push(str.substr(0,idx));

  res.push(idx?'ay':'way');
  return res.join('');
}

translatePigLatin("consonant");
