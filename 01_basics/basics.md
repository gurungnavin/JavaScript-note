## 目次 (Table of Contents)

- [Variables](#1-variables)
- [Datatypes](#2-data-types)
- [Conversion Operators](#3-conversion-operators)

## 1. Variables

JavaScript variables are used to store data values. You can declare variables using three keywords:

- var (Old way, not recommended)
- let (Recommended for variables that can change)
- const (Recommended for variables that should not change)

### Declaring Variable Names

- Must start with a letter, `_`, or `$` (e.g., `let name`, `const _value`, `var $price`).
- Can include letters, numbers, `_`, and `$` (e.g., `let user1`, `const value_2`).
- Cannot use JavaScript reserved keywords (e.g., `let class` is invalid).
- **Case-sensitive**: `name` and `Name` are different.

#### a. `var`(Global/Function Scope, Avoid Using)

```javascript
{
  var city = "Tokyo";
  console.log(city); // ✅ Output: Tokyo
}
console.log(city); // ✅ Output: Tokyo (Still accessible outside)

{
  console.log(city); // ✅ Output: Tokyo (Still accessible outside)
}
```

```pgsql
┌───────────── Block 1 ─────────────┐
│ var city = "Tokyo";               │ ✅ city exists here
│ console.log(city); // Output: Tokyo │
└───────────────────────────────────┘
                                      ✅ city exists here after the block
console.log(city); // Output: Tokyo (Still accessible outside)

┌───────────── Block 2 ─────────────┐
│  console.log(city); // Error    │ ✅ city exists here, accessible after block
└───────────────────────────────────┘
```

- 🔹 `var` is function-scoped and can be re-declared. But it has some issues, so we avoid it.

#### b. `let` (Block Scope, Can Change)

`block scope` refers to the code within curly brackets `{}`.

```javascript
let game = "football";

{
  console.log(game); // ✅ Accessible (Output: football)
  let name = "Yamada";
  console.log(name); // ✅ Accessible (Output: Yamada)
}

console.log(game); // ✅ Accessible (Output: football)
console.log(name); // ❌ ERROR: name is not defined

{
  console.log(game); // ✅ Accessible (Output: football)
  console.log(name); // ❌ ERROR: name is not defined
}
```

```pgsql
┌────────────── Outer Block ──────────-────┐
│ let game = "football";                   │
│                                          │
│ ┌────────── Inner Block 1 ──────────┐    │
│ │ console.log(game);  ✅ football   │    │
│ │ let name = "Yamada";              │    │
│ │ console.log(name);  ✅ Yamada     │    │
│ └───────────────────────────────────┘    │
│                                          │
│ console.log(game);  ✅ football          │
│ console.log(name);  ❌ ERROR: not defined│
│                                          │
│ ┌────────── Inner Block 2 ──────────┐    │
│ │ console.log(game);  ✅ football   │    │
│ │ console.log(name);  ❌ ERROR      │    │
│ └───────────────────────────────────┘    │
└─────────────────────────────────────────-┘


```

#### c. `const` (Block Scope, Can not Change)

`const` is block-scoped and once assigned a value, it cannot be reassigned or changed.

```javascript
// Outer Block
const fruit = "apple";

// Attempting to reassign a `const` variable (will throw an error in JavaScript)
const fruit = "banana"; // ❌ ERROR: cannot reassign
fruit = "orange"; // ❌ ERROR: cannot reassign

// Inner Block 1
{
  console.log(fruit); // ✅ apple
  let name = "Yamada";
  console.log(name); // ✅ Yamada
}

// Outside Inner Block 1
console.log(fruit); // ✅ apple
console.log(name); // ❌ ERROR: name is not defined

// Inner Block 2
{
  console.log(fruit); // ✅ apple
  console.log(name); // ❌ ERROR: name is not defined
}
```

```pgsql
┌────────────── Outer Block ────────-------──---────┐
│ const fruit = "apple";                            |
│                                                   │
| const fruit = "banana" ❌ ERROR: can not reassign │
│  fruit = "orange" ❌ ERROR: can not reassign      │
│                                                   │
│ ┌────────── Inner Block 1 ──────────┐             │
│ │ console.log(fruit);  ✅ apple     │             │
│ │ let name = "Yamada";              │             │
│ │ console.log(name);  ✅ Yamada     │             │
│ └───────────────────────────────────┘             │
│                                                   │
│   console.log(fruit);  ✅ apple                   │
│   console.log(name);  ❌ ERROR: not defined       │
│                                                   │
│ ┌────────── Inner Block 2 ──────────┐             │
│ │ console.log(fruit);  ✅ apple     │             │
│ │ console.log(name);  ❌ ERROR      │             │
│ └───────────────────────────────────┘             │
└───────────────────────────────────────---------──-┘
```

## 2. Data Types

JavaScript has `primitive` and `non-primitive` (or reference) data types.

#### 1. Primitive Data Types (Immutable)

- These are basic types that hold single values and cannot be changed.

  - `String:` Represents text.

    - Example: "Hello"

  - `Number`: Represents numeric values (integers and floats).

    - Example: 10, 3.14

  - `Boolean`: Represents a logical value, either true or false.

    - Example: true, false

  - `Undefined`: A variable declared but not assigned a value.

    - Example: let x;

  - `Null`: Represents an empty or non-existent value.

    - Example: let y = null;

  - `Symbol` (ES6): A unique and immutable value, often used for unique object keys.

    - Example: const sym = Symbol();

  - `BigInt` (ES11): Represents large integers beyond the safe integer range.
    - Example: 1234567890n

#### 2. non-primitive Data Types (Reference)

- Non-primitive data types store references to the data and can be modified. They include objects, arrays, and functions.

  - `Object:` An object is a collection of key-value pairs used to store data.
    ```javascript
    let person = { name: "John", age: 30 };
    ```

## 3. Conversion Operators

### JavaScript Type Conversion

1.  `String` to `Number` Conversion:

```javascript
let score = "navin";
let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // "number"
// console.log(valueInNumber); // NaN (Not a Number)
```

- The string "navin" can't be converted to a number, so Number() returns `NaN` (Not a Number).
- `NaN` is a special value of the number type in JavaScript that represents an invalid or undefined number result from operations like failed type conversions or mathematical errors.

2.  `Boolean` Conversion:

### Converting Boolean to Number
The global method `Number()` can also convert `booleans` to `numbers`.
```javascript
Number(true); // returns 1
Number(false); // returns 0
```

### Converting Boolean to String
The Boolean method `.toString()` does the same.

```javascript
false.toString() // returns "false"
true.toString() // retruns "true"
```


```javascript
let isLoggedIn = "navin";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true
```


### Falsy and Truthy Values in JavaScript

| **Value**           | **Type**       | **Result when converted to Boolean** | **Example**                    |
| ------------------- | -------------- | ------------------------------------ | ------------------------------ |
| **Falsy Values**    |                |                                      |                                |
| `false`             | Boolean        | `false`                              | `Boolean(false)` → `false`     |
| `0`                 | Number         | `false`                              | `Boolean(0)` → `false`         |
| `-0`                | Number         | `false`                              | `Boolean(-0)` → `false`        |
| `""` (empty string) | String         | `false`                              | `Boolean("")` → `false`        |
| `null`              | Object (null)  | `false`                              | `Boolean(null)` → `false`      |
| `undefined`         | Undefined      | `false`                              | `Boolean(undefined)` → `false` |
| `NaN`               | Number         | `false`                              | `Boolean(NaN)` → `false`       |
| **Truthy Values**   |                |                                      |                                |
| `"hello"`           | String         | `true`                               | `Boolean("hello")` → `true`    |
| `1`                 | Number         | `true`                               | `Boolean(1)` → `true`          |
| `-1`                | Number         | `true`                               | `Boolean(-1)` → `true`         |
| `Infinity`          | Number         | `true`                               | `Boolean(Infinity)` → `true`   |
| `true`              | Boolean        | `true`                               | `Boolean(true)` → `true`       |
| `{}`                | Object         | `true`                               | `Boolean({})` → `true`         |
| `[]`                | Object (array) | `true`                               | `Boolean([])` → `true`         |

3. `Number` to `String` Conversion

```javascript
let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber); // "33"
// console.log(typeof stringNumber); // "string"
```

- The `number` 33 is converted to a string "33".

4. `Dates` to `Numbers` Conversion and `Dates` to `String` Conversion

### Converting Dates to Numbers

The global method `Number()` can be used to convert dates to numbers.

```javascript
let date = new Date();
Number(date); // return number
```

Or

```javascript
let date = new Date();
date.getTime(); // Returns number
```

### Converting Dates to String

The global method `String()` can convert dates to strings.

```javascript
String(Date());
```

OR

```javascript
Date().toString();
```
