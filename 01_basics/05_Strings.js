const name = "Hitesh"
const repoCount = 50

// console.log(name + repoCount); // Hitesh50

console.log(`hello my name is ${name} and my repo is ${repoCount}`); // hello my name is Hitesh and my repo is 50')

const gameName = new String('hitesh-hc') // String object

console.log(gameName[0]); // h
console.log(gameName.__proto__); // String {constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, bold: ƒ, …}

console.log(gameName.toUpperCase()); // HITESHHC
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString); // hite

const newstringOne = " hitesh"
console.log(newstringOne); //  hitesh
console.log(newstringOne.trim()); // hitesh

const url = "https://hiteshchoudhary.com/hitesh%20choudhary"
console.log(url.replace('%20', '-')); // https://hiteshchoudhary.com/hitesh-choudhary


console.log(url.includes('sundar')); // false
console.log(url.gameName.split('-')); // ['https://hiteshchoudhary.com/hitesh', 'choudhary']