/**
 Mutations - https://www.freecodecamp.com/challenges/mutations
 Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

 For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

 The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

 Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
 */


function mutation(arr) {
  var _arr = arr[1],
    res = true;
  _arr = _arr?_arr.split(''):[];
  for(var i=0;i<_arr.length;i++){
    if(!(new RegExp(_arr[i],'gi')).test(arr[0])){
      res = false;
      break;
    }
  }
  return res;
}

mutation(["hello", "hey"]);
