/**
 Return Largest Numbers in Arrays - https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

 Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

 Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]
 **/


function largestOfFour(arr) {
  return arr.map(function(key){
    return key.reduce(function(a, b){return a>b?a:b;});
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
