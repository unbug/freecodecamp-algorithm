/**

 Sum All Primes - https://www.freecodecamp.com/challenges/sum-all-primes

 Sum all the prime numbers up to and including the provided number.

 A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

 The provided number may not be a prime.

 */

function isP(n){
  var k = Math.sqrt(n),
    i = 2;
  for(;i<k;i++){
    if(n%i===0) break;
  }
  return i>k;
}
function sumPrimes(num) {
  var sum = 0;
  while(num){
    sum += isP(num)&&num>1?num:0;
    num--;
  }
  return sum;
}

sumPrimes(10);
