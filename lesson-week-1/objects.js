/* 1. Please write a function that takes an object and returns the sum of all the values in the object. */
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};

// implement getSumOfValues function here
const getSumOfValues = (obj) => {
    let sum = 0
    for (let key in obj) {
        sum =  sum + 1
    }
    return sum
}

const sum = getSumOfValues(obj);

//console.log(sum); // 15


/* 2. Please write a function that takes an object and returns all the keys in an array. */
const obj2 = {
    banana: 'yellow',
    tomatoe: 'red',
    apple: 'green',
    pear: 'green',
    kiwi: 'green',
};


// implement getKeys function here
const getKeys = (obj) => {
const keys = []
for (let key in obj) {
    keys.push(key)
}
return keys
}

const keys = getKeys(obj2);
//console.log(keys); // ['banana', 'tomatoe', 'apple', 'pear', 'kiwi'];


/* 3. Please write a function that takes an object and returns all the values in an array. */
const obj3 = {
    banana: 'yellow',
    tomatoe: 'red',
    apple: 'green',
    pear: 'green',
    kiwi: 'green',
};


// implement getValues function here
const getValues = (obj) => {
    const objValues = []

    for (let key in obj) {
        objValues.push(obj[key])
    }

    return objValues
}

const values = getValues(obj3);
//console.log(values); // ['yellow', 'red', 'green', 'green', 'green'];

