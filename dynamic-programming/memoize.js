

function addTo10(n) {
    console.log('Computed through actual function');
    return n + 10;
}

function cachedAdd() {
    const cache = {};

    return function (n) {
        if (n in cache) {
            console.log('Collected from cache');
            return cache[n];
        } else {
            cache[n] = addTo10(n);
            return cache[n];
        }
    }
}

const memoizeAdd = cachedAdd();

memoizeAdd(10);
memoizeAdd(10);
memoizeAdd(20);
memoizeAdd(20);
memoizeAdd(20);

function memoize(fn) {
    const cache = {}
    return function (...args) {
        if (cache[args]) {
            return cache[args]
        } else {
            const result = fn.apply(this, args)
            cache[args] = result
            return result
        }
    }
}

/**
 *
 *

O(1) — Constant
O(n) — Linear
O(log(n)) — Logarithmic
O(n*log(n)) — Quasilinear
O(n²) — Quadratic
O(2^n) — Exponential

 *
 */