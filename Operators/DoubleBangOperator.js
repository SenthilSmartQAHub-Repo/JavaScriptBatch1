

// Double Bang(!!) Operator or Double nagation Operator

    //used to convert any value into a Boolean(true or false)

// false values in javascript
//=============================
//   false , 0 , "", null, undefined, NaN

// True values
  // "hello", 1 , 'a', true, [], {}

  // !!0
  //First ! - Convert the value to boolean and reverse it -> true
  // Second !- reverse it again to get actual boolean value-> false

  // !!true -> true
  // !!false -> false
  // !! 1 ->  true
  // !! 0 -> false

  let userName="admin"

  if(!!userName)
  {
    console.log("username exists")
  }

  let email=""
  
  console.log(!!email)

  let phoneNumber=null;

  if(!!phoneNumber)
  {
    console.log("phone number available")
  }
  else{
    console.log("Phone number missing")
  }