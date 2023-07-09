
/* 1. Please write a function that takes an array of words and returns the length of the shortest word. */

const words = ['bananas', 'tomatos', 'apples', 'pears', 'kiwis', 'mangos', 'pineapples'];

// implement getShortestWordLength function here
const getShortestWordLength = (arr) => {
    const wordsLengthArr = [];
    let shortestWord = 0;

    arr.forEach((item) => {
        wordsLengthArr.push(item.length)
    })

    shortestWord = wordsLengthArr.sort((a, b) => a - b)[0];

    return shortestWord;
}

const shortestWordLength = getShortestWordLength(words);

console.log(shortestWordLength); // 5




/* 2. Please write a function that takes an array of numbers and returns the largest (without using Math.max()) */

const numbers = [2321, 421, 12, 9, 29, 19, 21, 12, 2, 32, 4, 541, 6, 7, 8];

// implement getLargestNumber function here
//  

const getLargestNumber = (arr) => {
    let largestNumber = 0
    for( let i = 0; i < arr.length; i++) {

        if (largestNumber < arr[i]) {
            largestNumber = arr[i]
        }
    }
    return largestNumber;
}

// use the function for the following array:
console.log(getLargestNumber(numbers)); // 2321

// use the function for the following arrays as well:
const numbers2 = [321, 321, 32, 12, 5321, 321, 44];

console.log(getLargestNumber(numbers2)); // 5321

const numbers3 = [9, 15, 22, 1, 873, 3215, 54, 987];

console.log(getLargestNumber(numbers3)); // 3215


