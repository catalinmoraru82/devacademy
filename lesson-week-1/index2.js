/* 3. Please write a function that takes an array of words and a character and returns each word that has that character present in another array. */

const words = ['bananas', 'tomatos', 'apples', 'pears', 'kiwis', 'mangos', 'pineapples'];

// implement getWordsWithCharacter function here
const getWordsWithCharacter = (arr, char) => {
    const filteredArr = []

    arr.map((word) => {
        if(word.includes(char)) {
            filteredArr.push(word)
        }
    })

    return filteredArr
}

const wordsWithA = getWordsWithCharacter(words, 'a');

//console.log(wordsWithA); // ['bananas', 'tomatos, 'apples', 'pears', 'mangos', 'pineapples']

const wordsWithB = getWordsWithCharacter(words, 'b');

//console.log(wordsWithB); // ['bananas', 'tomatos, 'apples', 'pears', 'mangos', 'pineapples']



/* 4. Please write a function that takes an array of words and inserts an asterisk (*) between each letter of each word. */
const words2 = ['bananas', 'tomatos', 'apples', 'pears', 'kiwis', 'mangos', 'pineapples'];
const wordsWithAsterisk = getWordsWithAsterisk(words);

// implement getWordsWithAsterisk function here
function getWordsWithAsterisk(arr) {

    const mutatedList = []

    for (let i = 0; i < arr.length; i++) {
        mutatedList.push(arr[i].split('').join('*'))
    }

    return mutatedList;
}

//console.log(wordsWithAsterisk); // ['b*a*n*a*n*a*s', 't*o*m*a*t*o*s', 'a*p*p*l*e*s', 'p*e*a*r*s', 'k*i*w*i*s', 'm*a*n*g*o*s', 'p*i*n*e*a*p*p*l*e*s']


/* 5. Please write a function that takes an array of words and returns the number of vowels in the array. */
const words3 = ['bananas', 'tomatos', 'apples', 'pears', 'kiwis', 'mangos', 'pineapples'];

// implement getNumberOfVowels function here
const getNumberOfVowels = (arr) => {
let vowels = []
for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    // for (let letter of word) {
    //     if('aeiou'.indexOf(letter) > -1) {
    //         vowels.push(letter)
    //     }
    // }

    for (let j = 0; j < arr[i].length; j++) {
        if('aeiou'.indexOf(arr[i][j]) > -1) {
            vowels.push(arr[i][j])
        }
    }
}
return vowels.length
}

const numberOfVowels = getNumberOfVowels(words3);

//console.log(numberOfVowels); // 18

/* 6. Please write a function that takes an array of words and returns the number of palindromes in the array. */
const words4 = ['racecar', 'car', 'job', 'level', 'noon', 'madam', 'refer'];


// implement getNumberOfPalindromes function here

const isPalindrome = (word) => {
    const reversedWord = word.toLowerCase().split('').reverse().join('');
    if (reversedWord === word) {
        return true
    }
    return false;
}

const getNumberOfPalindromes = (list) => {
    let countPalindromes = 0;
    
    for (let item of list) {
        if (isPalindrome(item)) {
            countPalindromes++
        }
        
    }
    return countPalindromes
}

const numberOfPalindromes = getNumberOfPalindromes(words4);

console.log(numberOfPalindromes); // 5