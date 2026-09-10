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



// --------------------------------------------------------------------------

// Stack & Heap Memory

// Stack memory is used to store primitive datatypes and reference to the object in heap memory
// Heap memory is used to store reference(non-primitive) datatypes

let myYoutubename = "Codevolution" // stored in stack memory

let anotherName = "myYoutubename" // stored in stack memory
console.log(anotherName); // myYoutubename
console.log(myYoutubename); // Codevolution

let userOne = {
      email: "user@google.com",
      upi: "user@upi"

}


let usertwo = userOne // reference of userOne is stored in usertwo

usertwo.email = "hitesh@google.com  " // changing the email property of usertwo will also change the email property of userOne because both are pointing to the same object in heap memory

console.log(userOne.email); 

console.log(usertwo.email); 

