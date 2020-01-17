
function isUnique(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

function isUnique2(str) {
    for (var i = 0; i < str.length; i++) {

        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            return false;
        }

    }
    return true;
}

console.log(isUnique2('car'));
console.log(isUnique2('cara'));