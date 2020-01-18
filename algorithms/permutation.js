
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