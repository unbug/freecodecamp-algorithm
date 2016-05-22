/**

 Missing letters - https://www.freecodecamp.com/challenges/missing-letters

 Find the missing letter in the passed letter range and return it.

 If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  var code, res = [];
  str.split('').forEach(function(key){
    var b1 =  key.charCodeAt(0), m;
    if(code && b1-code){
      m = b1 - code;
      code = b1;
      if(m!=1){
        res.push( String.fromCharCode(b1-1) );
      }
    }
    code = b1;
  });
  return res.length?res.join(''):undefined;
}

fearNotLetter("abce");
