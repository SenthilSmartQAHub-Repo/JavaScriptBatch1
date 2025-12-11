

// Array is a collection of values stored in a single variable


let friuts=["apple","Banana","mango"]

console.log(friuts)

console.log(friuts[0])
console.log(friuts[1])
console.log(friuts[2])

// Array can be created in 2 ways

//1. using Square brackets(Most common)
let numbers=[10,20,30,40]

console.log(numbers)
//2. using new Array()

let cities=new Array("chennai","delhi","mumbai")

console.log(cities)


let arr=new Array(5) // 5 blocks

console.log(arr)

let mixedData=[20,true,null,undefined,"chennai"]

console.log(mixedData)

//length property

console.log(mixedData.length)

// Iterating over Elements

// 1. traditional for loop

for(let i=0;i<mixedData.length;i++)
{
    console.log(mixedData[i])
}

console.log(" ======2. for of loop=========")  // iterate the array values

for(let i of mixedData)
{
    console.log(i)
}

console.log(" ======3. for in loop=========") //Iterate the array index

for(let i in mixedData)
{
    console.log(i, mixedData[i])
}

//  function Expression(it is not hosited)
//           2.1 Arrow Function
//           2.2 Anonymous Function
console.log(" ======4 for each=========") 

mixedData.forEach(function(value,index){
    console.log(value,index)
})

mixedData.forEach((value)=>{
    console.log(value)
})

// const cars=['BMW','volvo',mini]  - iterator using for each and for in