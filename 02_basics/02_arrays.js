const fruits = ["grapes", "papaya", "orange", "banana" ]
const juice = ["grapes-juice", "papaya-juice", "orange-juice", "banana-juice"]

// fruits.push(juice)
// array take as single element
// console.log(fruits);

// // we can push juice items on fruits items as array with forEach and push

// juice.forEach((item) => fruits.push(item));
// console.log(fruits)

// 02 CONCAT(combine two array)

// let concatArr = fruits.concat(juice)
// console.log(concatArr);


// 03. SPREAD METHOD: combine arrays

// const spreadArr = [...fruits, ...juice]
// console.log(spreadArr);


// 04. Array inside Array

// const arrInArr = [1,2,3, [4,4,4], [5,5,[6,6,[7,7]]], 8]
// console.log(arrInArr);

// const real_Arr = arrInArr.flat(Infinity)
// console.log(real_Arr);

// const real_Arr1 = arrInArr.flat(3)
// console.log(real_Arr1);


// 05. isArray(check array)
// const myArrCheck = [1,2,3,4]
// const checkArr = Array.isArray(myArrCheck)
// console.log(checkArr);

// 06. convert into array

// const convertArr = Array.from("1234")
// console.log(convertArr);

// const convertArr1 = Array.from("GOOD MORNING".toLowerCase().split(" "));
// console.log(convertArr1);

