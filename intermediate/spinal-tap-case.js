/**

 Spinal Tap Case - https://www.freecodecamp.com/challenges/spinal-tap-case

 Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

 */


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/[_\s]/g,'-').replace(/([A-Z])/g,function(match, $1){
    return '-'+$1.toLowerCase();
  }).replace(/^-/,'').replace(/--/g,'-');
}

spinalCase('This Is Spinal Tap');
