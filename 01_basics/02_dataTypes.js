let name = "Rocky"  //String
let age = 30 // Number
let isActive = true  // Boolean

let bigInt = 12345678901234567890n

let sav = null  // Stand Alone Value, it is not undefined but empty

let x;   // undefined, value is not defined yet.

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

console.log(symbol1 === symbol2);  // false, they are unique

console.log(symbol1.toString()); // "Symbol(id)"
console.log(symbol2.toString()); // "Symbol(id)"
