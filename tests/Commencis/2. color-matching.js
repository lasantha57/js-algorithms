
function closestColor(pixels) {

    const results = [];

    console.log(pixels)
    const pixelsString = pixels[0];

    const red = parseInt(pixelsString.substring(1, 8), 2);
    const green = parseInt(pixelsString.substring(8, 16), 2);
    const blue = parseInt(pixelsString.substring(16, 24), 2);

    const colorMap = {
        'Black': calculateDistance(red, green, blue, 0, 0, 0),
        'White': calculateDistance(red, green, blue, 255, 255, 255),
        'Red': calculateDistance(red, green, blue, 255, 0, 0),
        'Green': calculateDistance(red, green, blue, 0, 255, 0),
        'Blue': calculateDistance(red, green, blue, 0, 0, 255)
    }

    results.push(findClosestColor(colorMap));

    return results;
}

function findClosestColor(colors) {
    let minValue = Infinity;
    let closestColor;

    for (let [color, value] of Object.entries(colors)) {
        if (minValue > value) {
            minValue = value;
            closestColor = color;
        } else if (minValue === value) {
            return 'Ambiguis';
        }
    }

    return closestColor;
}

function calculateDistance(r, g, b, r2, g2, b2) {
    const d = (((r - r2) * (r - r2)) + ((g - g2) * (g - g2)) + ((b - b2) * (b - b2)));
    return Math.sqrt(d);
}

console.log(closestColor(['000000001111111100000110']));