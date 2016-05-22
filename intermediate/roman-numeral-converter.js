/**
 Roman Numeral Converter - https://www.freecodecamp.com/challenges/roman-numeral-converter

 Convert the given number into a roman numeral.

 All roman numerals answers should be provided in upper-case.
 */


function convertToRoman(num) {
  //http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
  if (!+num){
    return NaN;
  }

  var  digits = String(+num).split(""),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
      "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
      "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman = "",
    i = 3;

  while (i--){
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  }
  return Array(+digits.join("") + 1).join("M") + roman;
}

convertToRoman(36);

function deromanize( roman ) {
  roman = roman.toUpperCase();
  var lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000},
    arabic = 0,
    i = roman.length;
  while (i--) {
    if ( lookup[roman[i]] < lookup[roman[i+1]] )
      arabic -= lookup[roman[i]];
    else
      arabic += lookup[roman[i]];
  }
  return arabic;
}
