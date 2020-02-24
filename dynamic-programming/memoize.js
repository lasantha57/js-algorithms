

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
