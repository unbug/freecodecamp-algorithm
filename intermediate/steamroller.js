/**

 Steamroller - https://www.freecodecamp.com/challenges/steamroller

 Flatten a nested array. You must account for varying levels of nesting.

 */

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var narr  = [];
  function getEl(el){
    if(Array.isArray(el)){
      for(var i=0;i<el.length;i++) getEl(el[i]);
    }else{
      narr.push(el);
    }
  }
  getEl(arr);
  return narr;
}

steamrollArray([1, [2], [3, [[4]]]]);
