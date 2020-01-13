

function capitalize(str) {
    const words = [];
    for (word of str.split(' ')) {
        const capitalized = word[0].toUpperCase() + word.slice(1);
        words.push(capitalized);
    }
    return words.join(' ');
}

console.log(capitalize('abc def ghi'));