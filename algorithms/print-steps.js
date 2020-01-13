
function printSteps(n) {

    for (let row = 0; row < n; row++) {

        let step = '';

        for (let column = 0; column < n; column++) {

            if (row >= column) {
                step += '#';
            } else {
                step += ' ';
            }
        }

        console.log(step);
    }
}

printSteps(5);