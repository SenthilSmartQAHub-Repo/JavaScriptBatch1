

// Set --> in-built javascript class used to store the unique values.

// Creating a Set

const myset=new Set()

//Adding the values - add()
myset.add(10)
myset.add(20)
myset.add(10)
myset.add(30)

console.log(myset)

//Checking the value - has()
console.log(myset.has(20))

//Removing the value-  delete()
myset.delete(10)

console.log(myset)

//Size of Set - size
console.log(myset.size)

// Clearing All values - clear()
myset.clear() 

console.log(myset)

const set1=new Set([1,2,3,4,5])

console.log(set1)

// for - of loop
for(const i of set1)
{
    console.log("i value is ", i)
}
// for - in loop - set is not indexed based

// foreach()
set1.forEach(value=>console.log(value))

// Different data type

const mixedset=new Set()

mixedset.add("hello")
mixedset.add(1)
mixedset.add(true)
mixedset.add(null)

console.log(mixedset)

const set2=new Set([10,20,30])

console.log(set2)
    
     const arr=Array.from(set2)// Converting Set to Array

     console.log(arr)


     //when to use set

     // Store the unique values
     // Remove duplicate values
     // Fast existence checking
     