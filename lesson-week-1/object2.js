/* 4. Plese write an object with a method that returns the sum of all the values in the object. */
const obj4 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  sum() {
    let sum = 0;

    for (this.keys in obj4) {

      if(typeof(obj4[this.keys]) === 'number') {
        sum += obj4[this.keys]
      }
    }
    return sum
  }
};

console.log(obj4.sum()); // 15


/* 5. Please write a function that takes an object and returns the number of values that are numbers. */
const obj5 = {
  a: 1,
  b: 'two',
  c: 3,
  d: 'four',
  e: 5
};


// implement getNumberOfValuesThatAreNumbers function here
const getNumberOfValuesThatAreNumbers = (obj) => {
  let count = 0;
  for (let keys in obj) {
    
    if(!isNaN(obj[keys])) {
      count++
    }

    // if(typeof(obj[keys]) === 'number') {
    //   count = count + 1
    // }
  }
  return count;
}

const numberOfValuesThatAreNumbers = getNumberOfValuesThatAreNumbers(obj5);

console.log(numberOfValuesThatAreNumbers); // 3


/* 6. Given a person object, please do the following: */


const person = {
  firstName: 'Gica',
  lastName: 'Popescu',
  age: 30,
  address: { 
    street: 'Barbu Vacarescu 12',
    city: 'Bucharest',
    state: 'Romania',
    zipCode: '12345',
    // implement changeAddressStreet method here
    changeAddressStreet() {
      this.street = 'Lipscani 102'
    }
  },
  
  // implement getFullName method here
  getFullName() {
    return this.firstName + ' ' + this.lastName
  },

  // implement isOver18 method here
  isOver18() {
    if(this.age > 18) {
      return true
    }
  },

  // implement getFullAddress method here
  getFullAddress() {
    const identifier = this.address

    return `${identifier.street} ${identifier.city} ${identifier.state}, ${identifier.zipCode}`
  }
};



console.log(person.getFullName()); // Gica Popescu

console.log(person.isOver18()); // true

console.log(person.getFullAddress()); // Barbu Vacarescu 12 Buchaest Romania, 12345

person.address.changeAddressStreet('Lipscani 102');

console.log(person.getFullAddress()); // Lipscani 102 Buchaest Romania, 12345