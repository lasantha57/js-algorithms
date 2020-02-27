

function sortByOccurances(arr) {
    const sortedArr = arr.slice().sort();

    let duplicates = [];

    let previous;

    for (let i = 0; i < sortedArr.length - 1; i++) {
        const currentElement = sortedArr[i];
        const nextElement = sortedArr[i + 1];

        if (currentElement === nextElement) {
            sortedArr.splice(i, 2);
            i--;
            duplicates = [...duplicates, currentElement, nextElement];
        } else if (previous === currentElement) {
            sortedArr.splice(i, 1);
            duplicates = [...duplicates, currentElement];
        }

        previous = currentElement;
    }

    return [...sortedArr, ...duplicates];
}

console.log(sortByOccurances([4, 5, 6, 5, 4, 3, 5]));