//Level 1

// Declare a variable name challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30 Days Of JavaScript';

// Print the string on the browser console using console.log()

console.log('30 Days Of JavaScript');

// Print the length of the string on the browser console using console.log()

console.log(challenge.length)

// Change all the string to capital letters using toUpperCase() method

console.log(challenge.toUpperCase())

// Change all the string to lowercase letters using toLowerCase() method

console.log(challenge.toLowerCase())

// Cut(slice) out the first word of the string using substr() or substring() method

console.log(challenge.substr(0, 2))

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(challenge.substr(11))

// Check if the string contains a word Script using includes() method

console.log(challenge.includes('Script'))

// Split the string into array using split() method

console.log(challenge.split())

// Split the string 30 Days Of JavaScript at the space using split() method

console.log(challenge.split(' '))

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(string.split(','))


// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

console.log(challenge.replace('JavaScript', 'Phyton'))

// What is character at index 15 in '30 Days Of JavaScript' string use charAt() method.

console.log(challenge.charAt(15))

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(challenge.charCodeAt('J'))

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(challenge.indexOf(3))

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log(challenge.lastIndexOf('t'))

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'

let string2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(string2.indexOf('because'))

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'

console.log(string2.lastIndexOf('because'))

// Use search to find the position of the first occurrence of the word because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'

console.log(string2.search('because'))


// Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g 
// ' 30 Days Of JavaScript '.

let challenge2 = ' 30 Days Of JavaScript '
console.log(challenge2.trim())


// Use startsWith() method with the string 30 Days Of JavaScript make the result true

console.log(challenge.startsWith('30'))

// Use endsWith() method with the string 30 Days Of JavaScript make the result true

console.log(challenge.endsWith('ipt'))

// Use match() method to find all the a’s in 30 Days Of JavaScript

let pattern = /a's/gi
console.log(challenge.match(pattern))

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let string3 = '30 Days of';
console.log(string3.concat(' Javascript'))

// Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2))

//Level 2

// Level 2

// Using console.log() print out the following statement.
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

let quote = '\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(quote)

// Using console.log() print out the following quote by Mother Teresa.
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same \--\ with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote2);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let numb = 10;
console.log(typeof (numb));

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let numb2 = 9.8;
console.log(Math.round(numb2));

// Check if 'on' is found in botsh python and jargon

let string4 = 'phyton';
let string5 = 'jargon';

console.log(string4.includes('on'));
console.log(string5.includes('on'));


// I hope this course is not full of jargon. Check if jargon is in the sentence.

let string6 = "I hope this course is not full of jargon.";
console.log(string6.includes('jargon'))

// Generate a random number between 0 and 100 inclusive.

let random = Math.random(0, 100)
console.log(Math.floor(random * 110))

// Generate a random number between 50 and 100 inclusive.?
let random2 = Math.random()
console.log(Math.floor(random2 * 110 ))

// Generate a random number between 0 and 255 inclusive.

let random3 = Math.random()
console.log(Math.floor(random3 * 265))

// Access the 'JavaScript' string characters using a random number.

let string7 = 'JavaScript' ;
let random4 = Math.random();
console.log(string7.charAt(Math.floor(random4 * 10) ))

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

let string8  ='1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n';
console.log(string8)


// Use substr to slice out the phase because because because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'

console.log(string2.substr(31,23))


// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
//Count the number of word love in this sentence.

let string9 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' ;
console.log(string9.split('love').length)


// Use match() to count the number all because's in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'

let string10 = 'You cannot end a sentence with because because because is a conjunction';
console.log(string10.match(/because/gi).length)

// Clean the following text and find the most frequent word(hint, use replace and regular express).
//const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.
// The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;
//I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs.
// %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is 
//al@so $the $resu@lt of &love& of tea&ching'

const sentence ='%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let arraySen = console.log(sentence.split(/\W+/gi ).join(' '))

// Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'