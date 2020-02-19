


function equalShiftsAmount(input) {
    let shiftedString = input;
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        const length = shiftedString.length - 1;
        shiftedString = shiftedString[length] + shiftedString.slice(0, length);

        if (input === shiftedString) {
            count++;
        }
    }

    return count
}

console.log(equalShiftsAmount('ekoekoeko'));