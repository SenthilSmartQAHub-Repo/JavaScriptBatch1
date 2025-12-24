

// null and undefined - both represent empty values

//undefined--> is the default value automatically assigened by javascript
// when a variable is declared but no value is given

let a;
console.log(a)


function test()
{
    //return 10;

}
console.log(test()) // function doesnot return anything then output is undefined

// null
// intentionally keeping this variable value empty

let b=null;// this value is assigned by the programmer

console.log(b)

console.log(typeof b) // object
console.log(typeof a) // undefined

//undefined==null==> true
console.log(a==b)  // Loose Equality Operator ( checks values)
//undefined==null but null is object ==> false
console.log(a===b) // Strict Equality Operator (Checks values and datatypes)

let email; //undefined(value is not assigned)
let selectedItem="laptop"
//reset this data
selectedItem=null
console.log(selectedItem)

let user="admin"

user=null;
if(user===null)
{
    console.log("User loggout out")
}
else{
    console.log("user is not loggout")
}


// Real time

   //undefined--> value is not available yet
   //null -  value was intentionally removed or reset