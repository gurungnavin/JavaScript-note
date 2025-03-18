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



const obj1 = {a: 2, b: 6, c:10}; 
const obj2 = {d: 4, e: 8, f:12};

const obj3 = {...obj1, ...obj2}; // output: {a: 2, b: 6, c: 10, d: 4, e: 8, f: 12}
const obj4 = Object.assign(obj1, obj2); // output: {a: 2, b: 6, c: 10, d: 4, e: 8, f: 12}


const users = [
  {user1: "John Doe", age: 25},
  {user2: "Jane Doe", age: 30},
  {
    user3: "Alice",
    age: 35,
  },
  {
    user4: "Bob",
    age: 40,
  },    
]


console.log(users[0].user1); // output: John Doe