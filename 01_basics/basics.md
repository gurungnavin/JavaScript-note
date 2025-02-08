## 1. Variables
JavaScript variables are used to store data values. You can declare variables using three keywords:
### 1. var (Old way, not recommended)
### 2. let (Recommended for variables that can change)
### 3. const (Recommended for variables that should not change)

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
    {
        let name = "Yamada";
        console.log(name); // ✅ Output: Tokyo
    }
        console.log(name); // ❌ Error: city is not available here

    {
        console.log(name); // ❌ Error: city is not available here
    }
```
```pgsql
┌───────────── Block 1 ─────────────┐
│ let name = "Yamada";               │ ✅ city exists here
│ console.log(name); // Output: Tokyo │
└───────────────────────────────────┘
                                      ❌ city is gone after the block
// console.log(name); // Error (not defined)

┌───────────── Block 2 ─────────────┐
│ // console.log(name); // Error    │ ❌ city is not accessible here
└───────────────────────────────────┘

```
#### c. `const` (Block Scope, Can Change)