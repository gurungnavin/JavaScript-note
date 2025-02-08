## 1. Variables
JavaScript variables are used to store data values. You can declare variables using three keywords:
### 1. var (Old way, not recommended)
### 2. let (Recommended for variables that can change)
### 3. const (Recommended for variables that should not change)

#### 1. `var`(Global/Function Scope, Avoid Using)
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

#### 2. `let` (Block Scope, Can Change)
`block scope` refers to the code within curly brackets `{}`.

```javascript
    {
        let city = "Tokyo";
        console.log(city); // ✅ Output: Tokyo
    }
        console.log(city); // ❌ Error: city is not available here

    {
        console.log(city); // ❌ Error: city is not available here
    }
```
```pgsql
┌───────────── Block 1 ─────────────┐
│ let city = "Tokyo";               │ ✅ city exists here
│ console.log(city); // Output: Tokyo │
└───────────────────────────────────┘
                                      ❌ city is gone after the block
// console.log(city); // Error (not defined)

┌───────────── Block 2 ─────────────┐
│ // console.log(city); // Error    │ ❌ city is not accessible here
└───────────────────────────────────┘

```