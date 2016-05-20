/**

 Seek and Destroy - https://www.freecodecamp.com/challenges/seek-and-destroy
 You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 */

function destroyer(arr) {
  var args = [].slice.call(arguments);
  return arr.filter(function(key){
    return args.indexOf(key)==-1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
