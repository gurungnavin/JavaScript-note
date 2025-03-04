const score = 100;

const balance = new Number(522.25)

console.log(balance);
console.log(balance.toFixed(2));

console.log((balance + 1.205).toFixed(2))


console.log(balance.toPrecision(4));

let yen = 1203256

console.log(yen.toLocaleString("ja-JP") + "yen")

// ++++++++++++ Maths +++++++++++++++++++

console.log(Math);

console.log("ABS: " + Math.abs(-55));
console.log("Round: " + Math.round(14.6));
console.log("SquareRoot: " + Math.sqrt(16));
console.log("Max Value: " + Math.max(16, 23, 55, 1, 4));
console.log("Min Value: " + Math.min(16, 23, 55, 1, 4));


console.log("Random Value: " + Math.random());

console.log(`Math Floor : ${Math.floor(2099.158)}`)

// Random number between 1 and 10
let random1to10 = Math.floor(Math.random() * 10) + 1;

// Random number between 10 and 20
let random10to20 = Math.floor(Math.random() * 11) + 10;

console.log(`Random Number 1 to 10: ${random1to10}`);
console.log(`Random Number 10 to 20: ${random10to20}`);