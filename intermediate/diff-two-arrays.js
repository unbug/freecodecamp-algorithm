/**
 Diff Two Arrays - https://www.freecodecamp.com/challenges/diff-two-arrays

 Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
 */


function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = [].concat.call(arr1, arr2).filter(function(key){
    return arr1.indexOf(key)==-1 || arr2.indexOf(key)==-1;
  });
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
