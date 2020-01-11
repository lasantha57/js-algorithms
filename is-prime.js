/**
 * Question: How would you verify a prime number?
 * Answer: a prime number is only divisible by itself and 1. So, i will run a while loop and increase by 1
 */

function isPrime(n) {
    var devider = 2;

    while (n > devider) {
        if (n % devider === 0) {
            return false;
        } else {
            devider++;
        }
    }

    return true;
}

console.log(isPrime(137));
console.log(isPrime(237));
console.log(isPrime(5));