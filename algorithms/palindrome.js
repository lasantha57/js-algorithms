/**
 * Question: How will you verify a word as palindrome?
 * Answer: if you reverse a word and it becomes same as the previous word, it is called palindrome.
 */

function palindrome(str) {
    var reversedStr = '';

    for (let index = str.length - 1; index >= 0; index--) {
        reversedStr += str[index];
    }

    return reversedStr === str;
}

console.log(palindrome('carasdf'));
console.log(palindrome('carac'));

function palindromeV2(str) {
    var reversedStr = [];

    for (let index = str.length - 1; index >= 0; index--) {
        reversedStr.push(str[index]);
    }

    return reversedStr.join('') === str;
}

console.log(palindromeV2('carasdf'));
console.log(palindromeV2('carac'));

function palindromeV3(str) {

    var stringLength = str.length;

    for (let index = 0; index < stringLength / 2; index++) {

        var firstChar = str[index];
        var endChar = str[stringLength - 1 - index];

        if (firstChar !== endChar) {
            return false;
        }
    }

    return true;
}

console.log(palindromeV3('carasdf'));
console.log(palindromeV3('carac'));

function palindromeV4(str) {
    return str.split('').reverse().join('') === str;
}

console.log(palindromeV4('carasdf'));
console.log(palindromeV4('carac'));

function palidromeV4(str) {
    return str.split('').every((char, i) => {
        return char === (str.length - 1 - i);
    });
}

console.log(palindromeV4('carasdf'));
console.log(palindromeV4('carac'));