

function validate(str) {

    if (str.length < 6 && str.length > 16) {
        return false;
    }

    if (str[0] === '-') {
        return false;
    }

    if (!str.match(/^[a-z0-9-]+$/i)) {
        return false;
    }

    if (str[0] === '-') {
        return false;
    }

    return true;
}

console.log(validate('Mike-Standish')); // Valid username
console.log(validate('Mike Standish')); // Invalid username