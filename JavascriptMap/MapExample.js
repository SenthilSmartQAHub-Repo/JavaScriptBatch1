

//Javascript Map

    // Map is an in built javascript collection used to store key-value pairs

    //keys are unique
    //keys can be any data type
    // values can be any data type

    // Creating a Map
    const myMap=new Map()

    // Adding values- set()
    myMap.set("name","Samy")
    myMap.set("age",20)
    myMap.set("job","Manager")
    
    console.log(myMap)

     myMap.set("job","Senior Manager") // if same key is added again, the value will be updated

    console.log(myMap)

    //Getting values - get()

    console.log(myMap.get("name"))
    console.log(myMap.get("age"))
    console.log(myMap.get("job"))


    //Checking key- has()

    console.log(myMap.has("age")); //true
    console.log(myMap.has("salary"));// false


    // Removing the entry(key-value)
    myMap.delete("age")

    console.log(myMap)

    // Size Entry
    console.log(myMap.size)

    // Clearing the Map - clear()

   // myMap.clear();

   // console.log(myMap)

    // Iterating over a Map

    // using for of loop

    for(let [i,j] of myMap)
    {
        console.log(`Key is ${i} and Value is ${j}`)
    }

    // using foreach()

    myMap.forEach((value,key)=>console.log(value,key))


    // map stores key-value pairs
    // keys are unique
    // Duplicate keys overwrite values
    // support any data type