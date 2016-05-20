/**
 Confirm the Ending - https://www.freecodecamp.com/challenges/confirm-the-ending

 Check if a string (first argument, str) ends with the given target string (second argument, target).
 */


function confirmEnding(str, target) {
  return new RegExp(target+'$').test(str);
}

confirmEnding("Bastian", "n");
