// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 50

let base = prompt('Enter base' );
let height = prompt('Enter height');
let result = (base * height * 0.5);

alert( result)

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

let sideA = prompt('Enter side a:' );
let sideB = prompt('Enter side b:');
let sideC = prompt('Enter side c:');
let result = (parseInt(sideA) + parseInt(sideB)  + parseInt(sideC) );

alert( result)
