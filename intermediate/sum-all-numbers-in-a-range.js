/**
 Sum All Numbers in a Range - https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range
 We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

 The lowest number will not always come first.
 */


function sumAll(arr) {
  var a1 = Math.min(arr[0], arr[1]),
    an = Math.max(arr[0], arr[1]);

  return (an-a1+1)*(a1+an)/2;
}

sumAll([1, 4]);
