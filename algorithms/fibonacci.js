/**
 * Question: How do get nth Fibonacci number?
 * Answer: I create an array and start from iterate through.
 */

function fibonacci(n) {
    var fib = [0, 1];

    if (n <= 2) return 1;

    for (var i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

console.log(fibonacci(7));

/**
 * Interviewer: What is the run time complexity?
 * you: O(n)
 * Interviewer: can you make it recursive?
 */

function fibonacciV2(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciV2(n - 1) + fibonacciV2(n - 2);
    }
}

console.log(fibonacciV2(7));

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);



/**
 * Interviewer: What is the run time complexity?
 * You: O(2n)
 */