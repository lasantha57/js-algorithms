
function maxChars(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }

        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxChars('abccccccscdefghaiasadfa'));