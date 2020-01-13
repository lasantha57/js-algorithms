

function reverseInt(int) {
    let reversedInt = '';
    for (i of int.toString()) {
        reversedInt = i + reversedInt;
    }
    return parseInt(reversedInt);
}

console.log(reverseInt(123456));
console.log(reverseInt(-120));

function reverseIntV2(int) {
    let reversedInt = '';
    for (i of int.toString()) {
        reversedInt = i + reversedInt;
    }
    return parseInt(reversedInt) * Math.sign(int);
}

console.log(reverseIntV2(123456));
console.log(reverseIntV2(-120));

function reverseIntV3(n) {
    const reversedInt = n.toString().split('').reverse().join('');
    return parseInt(reversedInt) * Math.sign(n);
}

console.log(reverseIntV3(123456));
console.log(reverseIntV3(-120));