/*
Stack Memory: Stores primitive types (like numbers, strings, booleans). These values are immutable, meaning you can't modify the original value directly. Any change results in a new value being created, not a modification of the original.

Heap Memory: Stores non-primitive types (like objects, arrays, and functions). These are mutable, meaning you can change the original data directly through its reference in the heap
*/

// ================== Stack & Heap Memory ====================
// Stack (Primitive)
let myName1 = "Yamada";
// console.log(myName1)
let myName2 = myName1;
myName2 = "Tanaka";
// console.log(myName2);



// Heap (Non-Primitive)

let person = {
  name: "Honda",
  age: 30,
  email : "honda@gmail.com"
}

let person1 = person
person1.name = "Suzuki"
person1.age = 31
console.log(person.name);
console.log(person.age);
console.log(person1.name);
console.log(person1.age);


