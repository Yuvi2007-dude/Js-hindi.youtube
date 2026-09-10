// datatypes are categorized into 2 types on the basis of how we can store them in our memory & how can we access it 

// Primitive 

// 7types of primitive datatypes are there in JS
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false because symbol is unique

const bigNumber = 3456789012345678901234567890n
console.log(bigNumber);

// BigInt is used to store large numbers which are beyond the limit of Number datatype

// Reference (Non-Primitive)
// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"]
 let myObj = {
    name: "John",
    age: 22,
 }

 const myFunction = function() {
    console.log("Hello World");
 }

 console.log(typeof anotherId);

//  https://262.ecma-international.org/5.1/#sec-11.4.3


