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

