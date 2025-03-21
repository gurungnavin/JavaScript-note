// Example 1: Creating and Modifying an Object
const instaUser = {
  username: "binladen",
  followers: 1000, // 1k followers
  following: 100, // following 100 people
  posts: 10, // 10 posts
  isLoggedin: true, // user is logged in
  isVerified: false, // user is not verified
};

console.log(instaUser);

// Example 2: Nested Object
const user = {
  name: "John Doe",
  age: 25,
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
  hobbies: [
    {
      reading: ["poems", "novels"],
    },
    "coding",
    "traveling",
  ],
};

console.log(user);

// Example 3: Merging Objects
const obj1 = { a: 2, b: 6, c: 10 };
const obj2 = { d: 4, e: 8, f: 12 };

const obj3 = { ...obj1, ...obj2 }; // Using spread operator
console.log(obj3); // Output: {a: 2, b: 6, c: 10, d: 4, e: 8, f: 12}

const obj4 = Object.assign({}, obj1, obj2); // Using Object.assign
console.log(obj4); // Output: {a: 2, b: 6, c: 10, d: 4, e: 8, f: 12}

// Example 4: Array of Objects
const users = [
  { user1: "John Doe", age: 25 },
  { user2: "Jane Doe", age: 30 },
  { user3: "Alice", age: 35 },
  { user4: "Bob", age: 40 },
];

console.log(users[0].user1); // Output: John Doe

// Example 5: Object Destructuring
const japaneseUser = {
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

const { name, age, address, hobbies, friends } = japaneseUser;

console.log(`名前: ${name}`); // Output: 山田太郎
console.log(`年齢: ${age}`); // Output: 30
console.log(`住所: ${address.city}都, ${address.country}`); // Output: 東京都, 日本

// Example 6: JSON Example
// JSON (JavaScript Object Notation) is a lightweight data-interchange format.
// Example JSON object:
// {
//   "name": "山田太郎",
//   "age": 30,
//   "address": {
//     "city": "東京",
//     "state": "東京都",
//     "country": "日本"
//   }
// }

// Example 7: API Data with Array of Objects in JSON Format
const companies = [
  {
    id: 1,
    name: "Google",
    location: "Mountain View, CA",
    employees: 100000,
  },
  {
    id: 2,
    name: "Facebook",
    location: "Menlo Park, CA",
    employees: 50000,
  },
  {
    id: 3,
    name: "Apple",
    location: "Cupertino, CA",
    employees: 150000,
  },
];

console.log(companies);