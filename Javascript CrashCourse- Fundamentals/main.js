// Javascript is a high level just in time compiled programming language that confors tor the ECMAScript specification
//Javascript can be run outside the browser
// also used in mobile app development to create cross platforms that can run both on iOS and android
//Also used to creat Desktop applications

//log a statement using console.log

console.log("Hello from file");
let age = 25;
console.log(age);
const salary = 80000;
console.log(salary);

// const cannot be changed when we move further, whereas let can

age = 27;
console.log(age);

// 1. Data Types
/* Primitive                                                Non Primitive

1. String type                                            1. Object
2. Boolean type
3. Number type
4. Undefined Type
5. Null Type
6. BigInt type
7. Symbol type


*/

const name = "Abha";
const language = "JavaScript";
const channel = "Codevolution";

const total = 0;
const PI = 3.14;
const isPrimary = true;
const isNewUser = false;

let result = null;
console.log(result);

const data = null;

//Objects

const person = {
  firstName: "Bruce",
  lastname: "Wayne",
  age: 30,
};

console.log(person.firstName);

const oddNumbers = [1, 3, 5, 7, 9];
console.log(oddNumbers[0]);

let a = 10;
a = "Vishwas";
a = true;
console.log(a);

// 2. Operators
/*

1.Assignment Operators
2. Arithmetic Operators
3. Comparison Operatoes
4. Logical Operators
5. String Operators
6. Other Operators



*/

let m = 10;

let z = 10;
let b = 5;

console.log(z + b);
console.log(z * b);

/*
Type Conversion

 */
console.log(Number("5"));
console.log(parseFloat("3.14"));
console.log(String(true));
console.log((500).toString());

/*
Equality 
1. Coercion                                2. No Coercion
==                                             ===

*/

/*
Functions

*/

function add(i1, i2) {
  return i1 + i2;
}
const sum = add(5, 10);
console.log(sum);

const arrowSum = (a, b) => a + b;
const number = (num) => num + 5;

function testFn() {
  const myName = " Batman";
  console.log(myName);
}
testFn();
