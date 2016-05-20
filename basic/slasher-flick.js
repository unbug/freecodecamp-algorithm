/**
 Slasher Flick - https://www.freecodecamp.com/challenges/slasher-flick

 Return the remaining elements of an array after chopping off n elements from the head.

 The head means the beginning of the array, or the zeroth index.
 */


function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany, arr.lenght)||[];
}

slasher([1, 2, 3], 2);
