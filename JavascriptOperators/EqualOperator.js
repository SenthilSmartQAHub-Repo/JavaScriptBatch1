
//   == loose equality operator(checks only values equal--> true)
//   ===  Strict equality operator(Checks type and values should be equal--> true)
  let number=20;
  let rollNumber='20'
  let columnNumber=201

  console.log(typeof number)//number type
  console.log(typeof rollNumber)//String type

  console.log(number==rollNumber);//true
  console.log(number===rollNumber);//false --> same value but differnt type 
  console.log(number===columnNumber);//false --> same type but value is different