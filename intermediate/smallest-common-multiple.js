/**

 Smallest Common Multiple - https://www.freecodecamp.com/challenges/smallest-common-multiple

 Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

 The range will be an array of two numbers that will not necessarily be in numerical order.

 e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

 */

function smallestCommons(arr) {
  arr = arr.sort(function(a, b){ return a>b;});
  var m = arr[0],
    n = arr[1],
    k = 1,
    res;
  function go(){
    res = n*k*(n-1);
    var i = m;
    for(;i<n;i++){
      if(res%i!==0) break;
    }
    if(i>=n){
      return res;
    }
    k++;
    return go();
  }
  return go();
}

smallestCommons([1,5]);
