/**

 Everything Be True - https://www.freecodecamp.com/challenges/everything-be-true

 Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

 Remember, you can access object properties through either dot notation or [] notation.

 */


function truthCheck(collection, pre) {
  // Is everyone being true?
  var checked = true;
  collection.forEach(function(key){
    if(!key[pre]){
      checked = false;
    }
  });
  return checked;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
