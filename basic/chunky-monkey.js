/**
 Chunky Monkey - https://www.freecodecamp.com/challenges/chunky-monkey

 Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */


function chunkArrayInGroups(arr, size) {
  var res = [], i = 0;
  while(i<arr.length){
    res.push(arr.slice(i,i+size));
    i += size;
  }
  return res;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
