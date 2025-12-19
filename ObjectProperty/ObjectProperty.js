

// Javascript Object Property

  // is a key-value pair inside the object

// key(PropertyName)
// value - data

const person={

    name:"Samy",
    "my age":20,
    job:"manager"
}

//person - Object
// name, age, job--> are properties
// "samy",20,"manager"- are values

// Accessing object Properties

//Dot Notation(Most Common)
console.log(person.name)
//console.log(person.my age)
console.log(person.job)
// Bracket Notation
console.log(person["my age"])

// Adding New Property

person.salary=20000


person["my Location"]="chennai"


console.log(person)

//Updating Object Property
person["my age"]=30

console.log(person)

//Deleting Object Property
delete person.salary;
console.log(person)

//Checking if property exists

console.log("job" in person) // true
console.log("gender" in person) // false

// Iterating Object Properties

// for in 

for(let key in person)
{
    console.log(key,person[key])
}

console.log(Object.keys(person), Object.values(person))
console.log(Object.entries(person))

//Nested Object Properties
const Employee={

    name:"Samy",
    "my age":20,
    job:"manager",
    address:{
        city:"chennai",
        country:"India"
    }
}

console.log(Employee.address.city)


//  Object properties used to store data in JSON format
//  Accessing using dot or bracket
//  can be added, updated , deleted
//  Nested Object 