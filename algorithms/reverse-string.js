/**
 * Question: How would you reverse a string in JavaScript?
 * Answer: I can loop through the string and concatenate letters to a new string
 */

function reverse(str) {
    var reversedStr = '';

    for (let index = str.length - 1; index >= 0; index--) {
        reversedStr += str[index];
    }

    return reversedStr;
}

console.log(reverse('abcdddds'))

/**
 * Interviewer: You know concatenation performed well in modern browsers but becomes slow in older browsers like IE8. Is there any different way, you can reverse a string?
 * Answer: sure. i can use an array and also add some checking. if string is null or other than string this will fail. 
   let me do some type check as well. Using this array is like using string buffer in some server side languages.
 */

function reverseV2(str) {
    var reversedChars = [];

    for (let index = str.length - 1; index >= 0; index--) {
        const element = str[index];
        reversedChars.push(element);
    }

    return reversedChars.join('');
}

console.log(reverseV2('abcdddds'));

/**
 * Interviewer: What is the run time complexity?
 * You: O(n)
 * Interviewer: Can you make this better in a recursive way?
 */

function reverseV3(str) {
    if (str === '') {
        return '';
    }
    return reverseV3(str.substr(1)) + str.charAt(0);
}

console.log(reverseV3('abcdddds'));

/**
 * Interviewer: Can you use any build in method to make it little cleaner?
 */

function reverseV4(str) {
    return str.split('').reverse().join('');
}

console.log(reverseV4('abcdddds'));

/**
 * Question: Can you make reverse function as string extension?
 * Answer: I need to add this function to the String.prototype and instead of using str as parameter, i need to use this
 */

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

console.log('abcdddds'.reverse());


function reverseV5(str) {
    return str.split('').reduce((reversed, char) => {
        return char + reversed;
    }, '');
}

console.log(reverseV5('abcdddds'));