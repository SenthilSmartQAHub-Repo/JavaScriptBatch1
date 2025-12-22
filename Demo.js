let objectStr3 = new String("World");
let objectStr4 = new String("World");
console.log(objectStr3.valueOf() === objectStr4.valueOf());
console.log(objectStr3.toString() === objectStr4.toString());


let primitiveStr1 = "Hello";
let primitiveStr2 = "Hello";
console.log(primitiveStr1 === primitiveStr2);
console.log(primitiveStr1 == primitiveStr2);


let primitiveStr3 = "Hello";
let primitiveStr4 = new String("Hello");
console.log(primitiveStr3 === primitiveStr4);
console.log(primitiveStr3 == primitiveStr4); 


let objectStr1 = new String("123");
let objectStr2 = new String("Hello");
console.log(typeof objectStr1.valueOf());
