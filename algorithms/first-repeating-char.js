


function findFirstRepeatedChar(charSet) {

    const charMap = {};
    let repeatedChar;

    for (let i = 0; i < charSet.length; i++) {
        const element = charSet[i];
        if (charMap[element]) {
            repeatedChar = element;
            break;
        } else {
            charMap[element] = true;
        }
    }

    return repeatedChar;

}

console.log(findFirstRepeatedChar(['4', '5', '2', '3', '5', '2']));
