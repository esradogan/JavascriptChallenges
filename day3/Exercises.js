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

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Find the length of python and jargon and make a falsy comparison statement.
console.log("Karsılastırma")
console.log(4>3)
console.log( 4 >= 3)
console.log( 4 < 3)
console.log( 4 <= 3)
console.log( 4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log( 4 != '4')
console.log( 4 == '4')
console.log( 4 === '4')
let sentence = "phyton";
let sentence2 = "jargon";

console.log(sentence.length !== sentence2.length )


// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python

console.log("Karsılastırma 2")
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log( 4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log( !(4 > 3 && 10 > 12))
console.log( !(4 === '4'))
let sentence3 = "dragon"    
let sentence4 = "python"    
console.log(!(sentence3.includes("on") && sentence4.includes("on")))

// Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.

console.log("Date Bilgileri")

const dateInfo = new Date();

console.log(dateInfo.getFullYear())
console.log(dateInfo.getMonth()) // 0 Ocak, aylar 0 sdan başlar Js de 
console.log(dateInfo.toDateString())
console.log(dateInfo.getDate())
console.log(dateInfo.getHours())
console.log(dateInfo.getMinutes())
console.log(Date.now())












