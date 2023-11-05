/* 1.4. Lesson - Loops */

/* The for-loop
for(initializer; condition; finalExpression) {
    //execute this code
}

for(let i = 0; i <= 100; i++) {
    console.log(i);
}

const array = [1, 2, 5, 'sth', 'name', 2.54, true, false, 0, NaN];
for (let i = 0; i < 10; i++) {
    console.log(array[i]);
}
*/

/*The loop scope
Global scope – values are accessible from anywhere.
File scope – values can be accessed only within the file.
Function scope – values are accessible within the function.
Code block scope – values are only visible within a code block.

var i = 5;
for (var i = 0; i < 10; i++) {
  // some code
}
// Here i is 10

let i = 5;
for (let i = 0; i < 10; i++) {
  // some code
}
// Here i is 5
*/

/* The for-in loop
For-in loops have the following syntax:
for (key in object) {
    // code block to be executed
}

Let’s use this loop to print all the elements from the array:
const numbers = [1,2,3,4,5,6];
for (index in numbers) {
    console.log(numbers[index]);
}

let text = "Some pretty long string.";
for (index in text) {
    console.log(text.charAt(index));
}

The for-of loop
for (value of object) {
    // code block to be executed
}

Let’s see how our code changes to achieve the same result as programs from the for-in loop section:
const numbers = [1,2,3,4,5,6];
for (value of numbers) {
    console.log(value);
}

let text = "Some pretty long string.";
for (value of text) {
    console.log(value);
}

The while-loop
while (condition) {
    // code block to be executed
}

let isLessThanTen = true;
let i = 0;
while (isLessThanTen) {
    i++;
    if (i < 10) {
        isLessThanTen = true;
    }
    else {
        isLessThanTen = false;
    }
    console.log(isLessThanTen);
}

do {
    // code block to be executed
}
while (condition);
*/

/*
const myArray = [];
for(let i=1; i<20; i++) {
    myArray.push(i);
}
for(let i=0; i<myArray.length; i++) {
    if(myArray[i] % 7 == 0) {
        console.log("Found first multiplicity of 7!: " + myArray[i]);
        break;
    }
else {
    console.log(myArray[i])
        
    }
}
*/

/*Disrupting the loop - break and continue
for(let i = 0; i < 10; i++) {
    if(i == 4) {
        continue;
    }
    console.log(i);
}

let i = 0;
while(true) {
    i++;
    if(i >= 10) {
        break;
    }
    console.log(i);
}
*/

/* Introduction to functions

function functionName(parameters) {
    // code to be executed
}

function multiply(a, b) {
    return a * b;
}

multiply(1,2);

let x = multiply(1,2); //x = 2

let x = multiply(1,2); //x = 2
let text1 = "One times two equals" + x;
let text2 = "One times two equals" + multiply(1,2);

multiply(1,2);
function multiply(a, b) {
    return a * b;
*/

/* Function parameters

function myFunction(x, y = 2) {
    console.log(y);
}
myFunction(1); //2
myFunction(1, 3); //3

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
x = sum(1, 23, 45, 67, 89); //225
*/

/* Function expressions
const x = function (a, b) {return a * b};
let z = x(3, 4);
*/

/*Arrow functions
const x = (x, y) => x * y;

const x = (x, y) => { return x * y };

var add = (...args) => {
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
};
*/

/* Binding functions to the HTML
<!DOCTYPE html>
<html>
    <head>
        <title>App</title>
        <script src="functions.js"></script>
    </head>
    <body>
        <button style="width: 100px; height: 100px;" onclick="increment()"></button>
    </body>
</html>

let x = 0;
function increment() {
    x = x + 1;
    console.log(x);
}

*/