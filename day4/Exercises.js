// Get user input using prompt(“Enter your age:”).
// If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.


let userInput = prompt('Enter your age:');
const restYears = userInput < 18 ? (18 - userInput) : 0;
userInput >= 18 ? alert('You are old enough to drive') : alert('You are left with ' + restYears + ' years to drive.');



// Compare the values of myAge and yourAge using if … else. 
// Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.

let myAge = 27;
let yourAge = prompt('Enter your age:');

if (yourAge >= myAge) alert('You are ' + (yourAge - myAge) + ' years older than me');


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement in to ways

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3

let a = 4;
let b = 3;


// if else
if (a > b) { console.log('a is greater than b') }
else console.log('a is less than b')

//Ternary
a > b ? console.log('a is greater than b') : console.log('a is less than b')


// Write a code which give grade students according to theirs scores:

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0 -49, F

let note = prompt('Your note :')
if (note >= 80 && note <= 100)
    alert('A')

if (note >= 70 && note <= 79)
    alert('B')

if (note >= 60 && note <= 69)
    alert('C')

if (note >= 50 && note <= 59)
    alert('D')

if (note >= 0 && note <= 49)
    alert('F')

 // Check if the season is Autumn, Winter, Spring or Summer. If the user input is:

// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer



