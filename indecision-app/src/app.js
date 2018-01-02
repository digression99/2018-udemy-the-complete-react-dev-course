//import './utils.js';
import subtract, {square, add} from './utils.js';
import is, { isAdult, canDrink } from './person.js';
import validator from 'validator';

console.log('app.js is running.!!!!@#!@#');
console.log(square(4));
console.log(add(40, 50));
console.log(subtract(100, 81));

console.log(isAdult(30));
console.log(canDrink(40));
console.log(isAdult(1));
console.log(canDrink(2));
console.log(is(100));
console.log('isEmail : ', validator.isEmail('kim@kim.com'));

// person.js
// named export isAdult(age) => true or false.
// named export canDrink(age) => true or false.

// import isAdult and canDrink in app.js
// use both and print result.