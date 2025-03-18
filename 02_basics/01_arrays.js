
const myArray = [1,2,3,4,5,6]

// array index starts from 0(Zero)
console.log(myArray[0]);
console.log(myArray[1]);

const myArray2 = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"]

// this will effect original data of myArray2
const myArray4 = myArray2

// this will copy the myArray2
const myArray3 = [...myArray2]

console.log(myArray3[1])
console.log(myArray4[1])


// array can be created by
const myarr = [1, 2, 3, 4, 5];
// OR

const myarr1 = new Array(1, 2, 3, 4, 5);


// ARRAY METHODS

// 01 - PUSH
// Add value

// let myArry = [1,2,3,4,5]
// myArry.push(6)

// console.log(myArry)

// 02 - POP
// remove last value

// let popArray = [1,2,3,4]
// popArray.pop()
// console.log(popArray);

// 03 - UNSHIFT || SHIFT
// Add value at First || Remove first value

// let unshiftArr = [1,2,3,4]
// unshiftArr.unshift(0)
// console.log(unshiftArr);

// unshiftArr.shift()
// console.log(unshiftArr);

// 04 INCLUDES
// Data include or not(True or false)

// let includesArr = [1,2,3]

// console.log(includesArr.includes(1));


// 05 INDEX OF
// Find index of data in array

// let indexOfArr = [1,2,3,4,77,8,9,0]

// console.log(indexOfArr.indexOf(0));

// 06 JOIN
// values are same but value  is converted into string.
// is used to combine all elements of an array into a single string, with an optional separator between the elements.

// let myJoinArr = [1,2,3,4]

// let myJoinArr2 = myJoinArr.join()
// let myJoinArr3 = myJoinArr.join("-")

// console.log(myJoinArr2);
// console.log(myJoinArr3);


// /// 06 Slice, Splice

// // Slice:  only returns the cut portion without changing the original array.
// // Does not modify the original array.
// // Slice cuts a portion of the array from the start index to the end index (exclusive).
// // slice(1, 3) - Starts at index 1 and ends before index 3 (does not include index 3).

// const sliceArr = [1, 2, 3, 4, 5];
// console.log(sliceArr.slice(1, 3));  // Output: [2, 3] (Start at index 1, exclude index 3)

// // Splice: removes elements and modifies the original array.
// // Modifies the original array.
// // Splice removes elements from the array and can also insert new elements at the same position.
// // splice(1, 3) - Starts at index 1 and removes 3 elements from the array.

// const spliceArr = [1, 2, 3, 4, 5];
// console.log(spliceArr.splice(1, 3));  // Output: [2, 3, 4] (Removes 3 elements starting from index 1)
// console.log(spliceArr);  // Output: [1, 5] (Original array is modified)





// Summary
// 1. Arrays can be created using `[]` or `new Array()`.
// 2. `push` - Adds a value to the end of the array.
// 3. `pop` - Removes the last value from the array.
// 4. `unshift` - Adds a value to the beginning of the array.
// 5. `shift` - Removes the first value from the array.
// 6. `includes` - Checks if a value exists in the array (returns true/false).
// 7. `indexOf` - Finds the index of a value in the array.
// 8. `join` - Combines all elements of an array into a string with an optional separator.
// 9. `slice` - Returns a portion of the array without modifying the original array.
// 10. `splice` - Removes or replaces elements in the array and modifies the original array.