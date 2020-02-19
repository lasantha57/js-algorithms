
function isPermutation(str1, str2) {

    var chars = {};

    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                if (chars[str1[i]]) {
                    chars[str1[i]] = chars[str1[i]] + 1;
                } else {
                    chars[str1[i]] = 1;
                }
            }
        }
    }

    return chars;

}

console.log(isPermutation('BASEBALL', 'BALLBASE'));


/**
 * Find all permutations
 */

var permArr = [];
var usedChars = [];

function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr
};

console.log(permute([5, 3, 7, 1]));