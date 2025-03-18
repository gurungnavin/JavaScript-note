// // singleton object
// var obj = { name: 'John', age: 30 };
// console.log(obj.name); // John



// // Object literal
// const obj1 = {}
// console.log(obj1); // {}


// const symbol1 = Symbol();
// const person = {
//   name: 'John',
//   "full name": 'John Doe',
//   age: 30,
//   [symbol1]: 'symbol',
//   email: 'john@email.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'New York',
//     state: 'NY'
//   },
// }

// // console.log(person.name); // John
// // console.log(person["email"]); //  john@email.com
// // console.log(`hobbies: ${person.hobbies[1]}`); // sports
// // console.log(`city: ${person.address.city}`); // New York
// // console.log(person["full name"]); // John Doe
// //console.log(person.full name) // Uncaught SyntaxError: Unexpected identifier

// console.log(person[symbol1]); // symbol
// console.log(typeof person[symbol1]); //

// person.email = "doe@gmail.com"  // update email
// console.log(person.email); //

// // Object.freeze(person) // freeze entire object
// // if object is freezed then we can't update the object

// person.email = "testing@gmail.com" // update email

// console.log(person);


// person.greeting = function () {
//   // this refers to the current object.name
//   return `Hello ${this.name}`
// }
// console.log(person.greeting());

// delete person.age // delete the age property
// console.log(person);


// Summary
// - Created objects using singleton and object literal syntax.
// - Accessed object properties using dot notation and bracket notation.
// - Updated object properties.
// - Deleted object properties.
// - Added new properties and methods to an object.
// - Used `Object.freeze()` to prevent modifications to an object.
// - Demonstrated the use of symbols as unique property keys.
// - Created and invoked an object method using `this`.