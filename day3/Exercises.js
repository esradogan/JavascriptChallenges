// Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Esra';
let lastName = 'Doğan';
let country = 'Turkey';
let city = 'Ankara';
let age = 27;
let isMarried = false;
const year = new Date();

console.log(firstName, lastName, country, city, age, isMarried, year.getFullYear())
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year.getFullYear())

// Check if type of '10' is equal to 10

let number = 10;
console.log(number == 10)

// Check if parseInt('9.8') is equal to 10

let parseNumber = '9.8'
console.log(parseInt(parseNumber) == 10)

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.


console.log('Truty values\n',-1<14)
console.log(4>5)
console.log(true==true)