// const instaUser = {}; // empty object

// instaUser.username = "binladen";
// instaUser.followers = 1000; // 1k followers
// instaUser.following = 100; // following 100 people
// instaUser.posts = 10; // 10 posts
// instaUser.isLoggedin = true; // user is logged in
// instaUser.isVerified = false; // user is not verified

// console.log(instaUser);

// Object nested inside object
// const user = {
//   name: "John Doe",
//   age: 25,
//   address: {
//     city: "New York",
//     state: "NY",
//     country: "USA",
//   },
//   hobbies: [
//     {
//       reading: ["poems", "novels"],
//     },
//     "coding",
//     "traveling",
//   ],
// };

// console.log(user);

// const obj1 = {a: 2, b: 6, c:10};
// const obj2 = {d: 4, e: 8, f:12};

// const obj3 = {...obj1, ...obj2}; // output: {a: 2, b: 6, c: 10, d: 4, e: 8, f: 12}
// const obj4 = Object.assign(obj1, obj2); // output: {a: 2, b: 6, c: 10, d: 4, e: 8, f: 12}

// const users = [
//   {user1: "John Doe", age: 25},
//   {user2: "Jane Doe", age: 30},
//   {
//     user3: "Alice",
//     age: 35,
//   },
//   {
//     user4: "Bob",
//     age: 40,
//   },
// ]

// console.log(users[0].user1); // output: John Doe

// Object c
// Object destructuring is a way to extract properties from an object and assign them to variables.

const user = {
  name: "山田太郎",
  age: 30,
  address: {
    city: "東京",
    state: "東京都",
    country: "日本",
  },
  hobbies: [
    {
      reading: ["漫画", "歴史書"],
    },
    "プログラミング",
    "ハイキング",
  ],
  friends: {
    friend1: "佐藤花子",
    friend2: "鈴木次郎",
    friend3: "高橋三郎",
  },
};

const { name, age, address, hobbies, friends } = user;

console.log(`名前: ${name}`); // output: 山田太郎
console.log(`年齢: ${age}`); // output: 30
console.log(`住所: ${address.city}都, ${address.country}`); // output: {city: "東京", state: "東京都", country: "日本"}

//JSON
// JSON (JavaScript Object Notation) is a lightweight data-interchange format.

// {
//   "name": "山田太郎",
//   "age": 30,
//   "address": {
//     "city": "東京",
//     "state": "東京都",
//     "country": "日本"
//   }
// }

// API Data with array of objects in JSON format
// const company = [
//   {
//     id: 1,
//     name: "Google",
//     location: "Mountain View, CA",
//     employees: 100000,
//   },
//   {
//     id: 2,
//     name: "Facebook",
//     location: "Menlo Park, CA",
//     employees: 50000,
//   },  
//   {
//     id: 3,
//     name: "Apple",
//     location: "Cupertino, CA",
//     employees: 150000,
//   },
// ];