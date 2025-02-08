## 目次 (Table of Contents)
- [Variables](#1-variables)
- [Datatypes and ECMA standards](#Datatypes-and-ECMA-standards)

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
        console.log(name);  // ✅ Yamada
    }

    // Outside Inner Block 1
    console.log(fruit); // ✅ apple
    console.log(name);  // ❌ ERROR: name is not defined

    // Inner Block 2
    {
        console.log(fruit); // ✅ apple
        console.log(name);  // ❌ ERROR: name is not defined
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