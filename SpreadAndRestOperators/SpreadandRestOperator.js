
// Spread and Rest Operators(...)

//Spread Operator(...)

    // used to expand values from an array, Object or String into individual values

    let numbers=[1,2,3]

    console.log(...numbers)

    const newNumbers =[...numbers,4,5]

    console.log(newNumbers)


    // Copy Array
    let original=[10,20,30]

   // let copy=[...original] //Shallow copy- Changes will not affect original array

     let copy=original // Deep Copy-  Changes will affect original array

    copy.push(5)

    console.log(original)
    console.log(copy)


    // Merge Arrays
    let a=[1,2]
    let b=[3,4]
    let merged=[...a,...b]

    console.log(merged)

    // Spread with Object

    let person={

        name:"Samy",
        age:20
    }

    let employee={

        ...person,
        job:"Manager"
    }

    console.log(employee)

    //Spread with String

    let word="Hello"

    console.log([...word])

// Rest Operator(...)
     // used to collect mulitple values into a single array, object


     function sum(...number1)
     {
        console.log(number1)
     }

     sum(1,2,3,4,5)

    let users={ name: 'Samy', age: 20, job: 'Manager' }
    
    let {name,...rest}=users // Object Destructuring

    console.log(name, rest)

    // Spread -  Expand values
    // Rest - Collect values