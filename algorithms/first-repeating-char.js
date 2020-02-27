


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

console.log(Math.min(1, 2, 3, 4, 1))

//console.log(findFirstRepeatedChar(['4', '5', '2', '3', '5', '2']));

function closestColor(pixels) {

    const results = [];

    console.log(pixels)
    const pixelsString = pixels[0];

    const red = parseInt(pixelsString.substring(1, 8), 2);
    const green = parseInt(pixelsString.substring(8, 16), 2);
    const blue = parseInt(pixelsString.substring(16, 24), 2);

    const pureBlack = calculateDistance(red, green, blue, 0, 0, 0);
    const pureWhite = calculateDistance(red, green, blue, 255, 255, 255);
    const pureRed = calculateDistance(red, green, blue, 255, 0, 0);
    const pureGreen = calculateDistance(red, green, blue, 0, 255, 0);
    const pureBlue = calculateDistance(red, green, blue, 0, 0, 255);

    const colorMap = {
        'Black': pureBlack,
        'White': pureWhite,
        'Red': pureRed,
        'Green': pureGreen,
        'Blue': pureBlue
    }

    return Math.min(pureBlack, pureWhite, pureRed, pureGreen, pureBlue);
}

function findMinColor(colors) {
    let min;
    for (let color in colors) {
        console.log(color)
    }
}

function calculateDistance(r, g, b, r2, g2, b2) {
    const d = (((r - r2) * (r - r2)) + ((g - g2) * (g - g2)) + ((b - b2) * (b - b2)));


}