// Scope
// global scope and block scope
let x = 10; // global scope
function test() {
  let x = 20; // block scope
  console.log(x); // 20
}

test();

let a = 99
var y = 30; // global scope
if(true) {
  let a = 100; // block scope
  console.log(`INNER: ${a}`); //
  let b = 50; // block scope
  var y = 40; // global scope
  console.log(y); // 40
} 
console.log(y); // 40
// console.log(b); // ReferenceError: b is not defined