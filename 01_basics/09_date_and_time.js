// Dates


// let myDate = new Date()
// console.log(myDate);

// // convert into toString
// console.log("otString: " + myDate.toString());
// console.log("TodateString: " +myDate.toDateString());
// console.log("toLocalDateString: " +myDate.toLocaleDateString());


// // with this format, count from 0 to 11
// let myCreateDate = new Date(2025, 0, 25)
// console.log("myCreateDate: " + myCreateDate.toDateString())

// // with this format, count from 1 to 12
// let myCreateDate2 = new Date("2025-1-25")
// console.log("myCreateTimeString2: " + myCreateDate2.toDateString())

// //mm/dd/yy
let myCreateDate3 = new Date("12-29-2025")
// console.log("myCreateTimeString3: " + myCreateDate3.toDateString())

// console.log("myCreateDateToLocale: " + myCreateDate.toLocaleDateString())
// console.log("myCreateTimeString: " + myCreateDate.toTimeString())


// Time

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreateDate3.getTime());


// console.log(Math.floor(Date.now()/1000));

let newDate4 = new Date()

console.log(newDate4);

// months start from 0 to 11 so, +1 added
console.log(`${newDate4.getFullYear()}:${newDate4.getMonth() + 1}:${newDate4.getDate()}`);

console.log(`${newDate4.getHours()}:${newDate4.getMinutes()}:${newDate4.getSeconds()}`);

// sunday, monday
let weekdayLong = newDate4.toLocaleString('default', {
  weekday: "long"
})

console.log(weekdayLong);


let monthLong = newDate4.toLocaleString('default', { month: "long" });
console.log(monthLong);  // Example: "3月"


// 2-digit day
let day2Digit = newDate4.toLocaleString('default', { day: "2-digit" });
console.log(day2Digit);  // Example: "04"

// Hour (12-hour format)
let hour12 = newDate4.toLocaleString('default', { hour: "numeric", hour12: true });
console.log(hour12);  // Example: "12" (午後5時)