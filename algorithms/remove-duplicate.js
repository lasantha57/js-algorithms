
/**
 * Question: How would you remove duplicate members from an array?
 * Answer: will start a while looping and keep an object/ associated array. 
   If i find an element for the first time i will set its value as true (that will tell me element added once). 
   if i find a element in the exists object, i will not insert it into the return array.
 * 
 */

function removeDuplicate(arr) {
    const uniques = [];
    const duplicates = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf()) {
            exists[arr[i]] = true;
            uniques.push(arr[i]);
        } else {
            duplicates.push(arr[i])
        }
    }

    uniques.sort();
    duplicates.sort();

    return [...uniques, ...duplicates];

}

console.log(removeDuplicate([5, 3, 1, 2, 2, 4]));