/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// ------------------------------------------------------------------------------------------ Vanilla JavaScript Function

//function addTwoNumbers(a, b) { // 1) If I want to take any parameters, add in the parentheses.
    //Everything between these curly braces is called a code block
 // 2) So i can just return the result of a + b using return
//}
// 3) To use the function, I will call it. 
//let sum = addTwoNumbers(3, 5);
// 4) Log the variable to the console to confirm the result
//console.log(sum);

// --------------------------------------------------------------------------------------- Arrow Function With Parameters
// ES6 are defined as constants to ensure that they can't be overwritten or misused later in code.
// Also they must be defined before being called

// Change the function to const and add equal sign between name of constant and paretheses
// and then use the ES6 "fat arrow" (=>) to point to the curly braces
const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// --------------------------------------------------------------------------- Single Line Arrow Function With Parameters

// We can remove the curly braces and return statement. Instead we can put them on the same line.
const addTwoNumbers2 = (a, b) => a + b;
// In this way, the fat arrow can be thought of as a sort of implicit way of stating what the function to return.
// This should only be used for simple functions. More complex and you need the curly braces.
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// ----------------------------------------------------------------------------------------------------- Implicit Returns

// If I want a function that just logs a message to the console.
const saySomething = message => console.log(message);
saySomething('Hello World');

// If you've got a function that takes no parameters at all, you must use an empty partheseses declaring the function
const sayHello = () => console.log('hello');
sayHello();

// --------------------------------------------------------------------------------------------- Returning Multiple Lines

// If you need to return miltiple lines of code, you must whatever comes after the return keyword in partheseses

const returnMultipleLines = () => (
    `<p>
    This is multiple lines
    </p>`
)
console.log(returnMultipleLines());