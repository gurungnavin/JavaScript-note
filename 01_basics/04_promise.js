// Basic Syntax

/*
let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)
  
    myResolve(); // when successful
    myReject();  // when error
  });
  
  // "Consuming Code" (Must wait for a fulfilled Promise)
  myPromise.then(
    function(value) { code if successful },
    function(error) {code if some error}
  );
*/

// let myPromise = new Promise(function(resolve, reject) {
//   let myName = "navin"
//   if(myName.length = 5) {
//     console.log(myName);
//     resolve()
//   }
//   else {
//     console.log("Error");
//     reject()
//   }
// })

// myPromise.then(
//   () => {console.log("This is will execute as Successful");
//   },
//   () => {console.log("Error2");
//   }
// )

// let myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Testing 1")
//     // we can pass parameter through resolve
//     resolve({name : "Yamada", age: 35})
//   }, 5000);
// })

// myPromise1.then(
//   (value)=> {
//     console.log("Testing 2");
//     console.log(value.name);
//     console.log(value.age);
//   }
// )

// let myPromise2 = new Promise(function(resolve2, reject2) {
//   let a = true;
//   if(!a == false) {
//     console.log("Hello from Promise2");
//     resolve2({username: "John", password : "123"})
//   }
//   else {
//     console.log("Err Step1");
//     reject2()
//   }
// })

// // if we return the username
// //username can access from .then().catch method with parameter
// myPromise2
// .then((value1)=> {
//     console.log("1st then: " + value1);
//     return value.username
// })
// .then((value) => {
//   console.log("2nd then: " + value);
// })
// .catch(()=> {
//   console.log("Error");
// })
// .finally(() => console.log("Finally, promise resolve or reject")
// )

// let myPromise3 = new Promise(function (resolve, reject) {
//   let isActive = true;
//   if (isActive == true) {
//     console.log("Success: myPromise3");
//     resolve({ username: "dev123", password: 4321 });
//   } else {
//     console.log("Err from myPromise3");
//     reject();
//   }
// });

// async function consumingFromMyPromise3() {
//   try {
//     const response = await myPromise3;
//     console.log(response);
//     console.log("username: " + response.username);
//     console.log("password: " + response.password);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumingFromMyPromise3();



// const myPromise4 = new Promise(function(resolve4, reject4) {
//   let isLoggin = true;
//   if(isLoggin == true) {
//     console.log("Data Fetched Successfully");
//     resolve4()
//   }
// })

// async function getProduct() {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products?limit=5")
//     // data will be string, that's why we have to convert into json formate
//     // convert into json will take time, that why, we need to write await.
//     const data = await response.json()
//     console.log(data);
//   } catch (error) { 
//     console.log("Error: " + error);
//   }
// }

// getProduct()


// fetch('https://fakestoreapi.com/products?limit=5')
// .then((response)=>{
//   return response.json()
// })
// .then((datas) => {
//   datas.forEach(data => {
//     console.log(data.title);
//   });
// })
// .catch((error) => console.log(error)
// )