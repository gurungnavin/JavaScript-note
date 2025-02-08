// Declaring Variable Names
let firsName = "John";       // Valid
const _value = 23;   // Valid
var $price = 2300; // Valid
let isActive;     // Valid

//======================== var examples ========================
    {
        var city = "Tokyo";
        console.log("city:" + city); // ✅ Output: Tokyo
    }
        console.log("city:" + city); // ✅ Output: Tokyo (Still accessible outside)

    {
        console.log("city:" + city); // ✅ Output: Tokyo (Still accessible outside)
    }

//======================== let examples ========================

    {
        let name = "Yamada";
        console.log("name :" + name); // ✅ Output: Tokyo
    }
      //  console.log(name); // ❌ Error: city is not available here

    {
      //  console.log(name); // ❌ Error: city is not available here
    }   

    
// ======================== const example ========================================


    // Outer Block
    const fruit = "apple";

    // Attempting to reassign a `const` variable (will throw an error in JavaScript)
    
    //const fruit = "banana"; // ❌ ERROR: cannot reassign
    
    //fruit = "orange"; // ❌ ERROR: cannot reassign

    // Inner Block 1
    {
        console.log("fruit: " + fruit); // ✅ apple
        let name = "Yamada";
        console.log("name: " + name);  // ✅ Yamada
    }

    // Outside Inner Block 1
    console.log("fruit: " + fruit); // ✅ apple
   //console.log(name);  // ❌ ERROR: name is not defined

    // Inner Block 2
    {
        console.log("fruit: " + fruit); // ✅ apple
        //console.log(name);  // ❌ ERROR: name is not defined
    }