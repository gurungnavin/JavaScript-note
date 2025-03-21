// // Simple function
// function greet() {
//   console.log('Hello World!');
// }
// greet(); // Hello World!

// // Function with parameters
// function greetUser(name) {
//   console.log(`Hello ${name} さん!`);
// }
// greetUser('山田'); // Hello 山田さん!

// // Function with return value
// function addNumbers(a, b) {
//   return a + b;
// }
// console.log(addNumbers(1, 2)); // 3

// // Function with default parameters
// function addNumbersWithDefaults(a = 15, b = 10) {
//   return a + b;
// }
// console.log(addNumbersWithDefaults()); // 25

// // Function with rest parameters
// function sumAll(...numbers) {
//   return numbers.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(sumAll(1, 2, 3, 4, 5)); // 15

// // Function with spread operator
// function sumThreeNumbers(a, b, c) {
//   return a + b + c;
// }
// const nums = [1, 2, 3];
// console.log(sumThreeNumbers(...nums)); // 6

// // Function to add cart items
// function addCartItems(...items) {
//   return items;
// }
// const cartItems = ['orange', 'grape', 'apple', 'banana'];
// console.log(addCartItems(...cartItems)); // ['orange', 'grape', 'apple', 'banana']

// // Function to calculate total price of cart items
// function calculateCartTotal(...prices) {
//   return prices.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(calculateCartTotal(200, 300, 400, 500)); // 1400

// // Function with login message
// function loginMessage(username = 'guest') {
//   return username === 'guest'
//     ? 'ユーザー名を入力してください'
//     : `${username} さんがログインしました`;
// }
// console.log(loginMessage()); // ユーザー名を入力してください
// console.log(loginMessage('山田')); // 山田 さんがログインしました


// function with array return
// const fruits = ['apple', 'banana', 'orange', 'grape'];
// function getFruits(index) {
//   return fruits[index];
// }

// console.log(getFruits(3)); // grape