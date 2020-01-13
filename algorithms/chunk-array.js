

function chunkArray(arr, n) {

    let chunckedArray = [];

    for (let i = 0; i < arr.length; i++) {
        let innerArray = [];
        for (let index = 1; index <= n; index++) {
            innerArray.push(arr.shift());
        }
        chunckedArray.push(innerArray);

        if (arr.length <= n) {
            chunckedArray.push(arr);
        }
    }

    return chunckedArray;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 4));


function chunkArrayV2(array, size) {

    let chuncked = [];

    for (let element of array) {
        let last = chuncked[chuncked.length - 1];

        if (!last || last.length === size) {
            chuncked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chuncked;
}

console.log(chunkArrayV2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 4));


function chunckArrayV3(array, size) {
    const chuncked = [];
    let index = 0;

    while (index < array.length) {
        chuncked.push(array.slice(index, index + size));
        index += size;
    }

    return chuncked;
}

console.log(chunckArrayV3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 4));