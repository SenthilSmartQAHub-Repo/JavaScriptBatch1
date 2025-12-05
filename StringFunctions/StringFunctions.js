

let str1="Welcomell"
//-7  -6  -5  -4  -3 -2  -1
// W  e  l   c   o   m   e 
// 0  1  2   3   4   5   6

 console.log(str1.charAt(3))

 console.log(str1.at(3))

  console.log(str1.at(-5))

  console.log(str1.concat(" to javascript class"))

  console.log(str1.includes("come"))

  console.log(str1.indexOf('z'))
  console.log(str1.lastIndexOf('l'))
    console.log(str1.search('ll'))
    
    let str2="playwright Automation"


console.log(str2.match(/a/g))

    console.log(str2.slice(-5,-1))

        console.log(str2.substring(2,10))
  
      console.log(str2.toLowerCase())
      console.log(str2.toUpperCase())

      console.log(str2.trim())
         console.log(str2.trimStart())
           console.log(str2.trimEnd())



   let str3="playwright Automation"

   console.log(str3.length)

   for(let i=10;i<str3.length;i=i+1)
   {
    console.log(str3.charAt(i))
   }

   for(let ch of str3)
   {
    console.log(ch)
   }

   console.log("welcomeasd".repeat(50))


   let str123="javascripta"

   console.log(str123.indexOf('a',4))