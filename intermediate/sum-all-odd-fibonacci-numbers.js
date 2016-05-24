/**

 Sum All Odd Fibonacci Numbers - https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers

 Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

 The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

 As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

 */


function sumFibs(num) {
  var sum = 0;
  function fib(curr, next, n){
    if(curr<=num){
      sum += curr%2?curr:0;
      return fib(next, curr+next, n-1);
    }else{
      return sum;
    }
  }
  return fib(0, 1, num);
}

sumFibs(4);
