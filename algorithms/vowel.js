

function vowels(str) {
    let count = 0;
    const checker = 'aeiou';

    for (char of str) {
        if (checker.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(vowels('abcdefghijklmnop'));