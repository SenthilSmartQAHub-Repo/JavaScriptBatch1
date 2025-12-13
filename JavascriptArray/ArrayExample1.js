

//  map() function

//  map() is a javascript array method used to transform each value present in array
// return a new array with modified values
// Original array value doesnot change

//  Example:
    // uppercase/lowercase
    // Curreny format
    // mulitple each value
    // calculate the GTS for all bills

const numbers=[2,3,4,5]

//  const modifiedvalue=numbers.map((n)=>{

//         return n*2
//     })

// if your arrow funtion has one parameter the bracket() are optional
// if body has one expression then {} and return are optional
// value => value +2 valid arrow function
// value -> parameter
// => arrow
// n+2 -> expression to return
 const modifiedvalue=numbers.map(n=>n*2)

console.log(modifiedvalue)


// filter() function

// filter function user to select or extract the values that satisfy a given condition
// Original array value doesnot change
//return the new array only the values that meet the condition
//Example
  // filtering active/inactive users
  // filtering passed students
  // filtering the products by price range

const number1=[10,15,20,25,30]
// output [25,30]
//condition arrayvalue>20

const ablove20=number1.filter(n=>n>20)

console.log(ablove20)


// reduce() function

// reduce function used to accumulate all values present in the array

const number2=[10,15,20,25,30]

const total=number2.reduce((acc,value)=>acc+value,0)  //10+15=> 25

console.log(total)

