// var examples
    {
        var city = "Tokyo";
        console.log(city); // ✅ Output: Tokyo
    }
        console.log(city); // ✅ Output: Tokyo (Still accessible outside)

    {
        console.log(city); // ✅ Output: Tokyo (Still accessible outside)
    }

// let examples

    {
        let name = "Yamada";
        console.log(name); // ✅ Output: Tokyo
    }
      //  console.log(name); // ❌ Error: city is not available here

    {
      //  console.log(name); // ❌ Error: city is not available here
    }   
//