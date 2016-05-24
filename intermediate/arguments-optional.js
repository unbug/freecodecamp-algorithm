/**

 Arguments Optional - https://www.freecodecamp.com/challenges/arguments-optional

 Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

 For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

 Calling this returned function with a single argument will then return the sum:

 var sumTwoAnd = addTogether(2);

 sumTwoAnd(3) returns 5.

 If either argument isn't a valid number, return undefined.

 */


function addTogether() {
  var a = arguments[0],
    b = arguments[1];
  function checkNum(n){
    return typeof n === 'number'?n:undefined;
  }
  if(checkNum(a)!==undefined){
    if(b){
      return checkNum(b)!==undefined?(a+b): undefined;
    }else{
      return function(b2){
        return checkNum(b2)!==undefined?(a+b2):undefined;
      };
    }
  }
  return undefined;
}

addTogether(2,3);
