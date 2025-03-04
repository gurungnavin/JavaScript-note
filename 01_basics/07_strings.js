const variable_1 = "test"
const variable_2 = 55
const variable_age = 32
let variable_phoneNumber = "080123456789"
console.log(variable_1.toLocaleUpperCase() + variable_2 + " test3");
console.log("you" + " are " + variable_age + " years old");
console.log("phone number is: " + variable_phoneNumber);


const newMethod = new String("Hello World")
console.log(newMethod);
console.log(newMethod.length);
console.log(newMethod.toLocaleLowerCase());
console.log(newMethod.toUpperCase());
console.log(newMethod.charAt(4));
console.log(newMethod.indexOf("o"));

const trim = "   Yahoo   "
console.log(trim.trim());


let str1 = 'Hello World'; // single quotes
let str2 = "Hello World"; // double quotes
let str3 = `Hello World`; // backticks (template literals)

console.log(str1[0]); // 'H'
console.log(str2[1]); // 'e'


// Template Literals
let str = 'apple,banana,orange';

// Checking if a string includes a specific word using includes()
if (str.includes('banana')) {
  console.log('Banana is in the string!');
}

// Split the string by commas using split()
let fruits = str.split(',');
console.log(fruits);  // Output: ["apple", "banana", "orange"]

// Replace a word using replace()
let newStr = str.replace('banana', 'grape');
console.log(newStr);  // Output: 'apple,grape,orange'

// Template Literals: Using variables inside strings
let fruitList = `Fruits: ${fruits.join('- ')}`;
console.log(fruitList);  // Output: 'Fruits: apple, banana, orange'


