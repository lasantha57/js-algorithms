

function hasPairWithSum(numbers, sum) {

    for (let i = 0; i < numbers.length - 1; i++) {

        if (numbers[i] <= sum) {

            for (let j = (i + 1); j < numbers.length; j++) {

                if ((numbers[i] + numbers[j]) === sum) {
                    return true;
                }

            }
        }
    }

    return false;
}

// console.log(hasPairWithSum([1, 2, 3, 4, 5], 8));
// console.log(hasPairWithSum([0, 2, 3, 9, 8], 8));
// console.log(hasPairWithSum([1, 2, 4, 4], 8));


function hasPairWithSum2(numbers, sum) {

    const complements = [];

    const length = numbers.length;

    for (let i = 0; i < length; i++) {
        if (complements.indexOf(numbers[i]) > -1) {
            return true;
        }
        const complement = sum - numbers[i];
        complements.push(complement);
    }

    return false;
}

console.log(hasPairWithSum2([1, 2, 3, 4, 5], 8));
console.log(hasPairWithSum2([0, 2, 3, 9, 8], 8));
console.log(hasPairWithSum2([1, 2, 4, 4], 8));