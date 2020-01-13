
function anagram(str1, str2) {
    const str1Map = createCharacterMap(str1);
    const str2Map = createCharacterMap(str2);

    if (Object.keys(str2Map).length !== Object.keys(str2Map).length) {
        return false;
    }

    for (const char in str1Map) {
        if (str1Map[char] !== str2Map[char]) {
            return false;
        }
    }

    return true;
}

function createCharacterMap(str) {
    const charMap = {};
    for (char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

console.log(anagram('abcde ftrf', 'acdbe trff'));
console.log(anagram('abcde ftrf23', 'acdbe trff'));


function anagramV2(str1, str2) {
    return sortString(str1) === sortString(str2)
}

function sortString(str) {
    return str.split('').sort().join('');
}

console.log(anagramV2('abcde ftrf', 'acdbe trff'));
console.log(anagramV2('abcde ftrf23', 'acdbe trff'));