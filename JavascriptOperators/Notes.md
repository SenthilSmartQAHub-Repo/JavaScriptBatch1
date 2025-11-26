

1. Arithmetic Operator(+,-,*,/,%)
2. Assigmenent Operator(=,+=,-=,*=,%=,/=)
3. Comparison Operator(==, ===,>,<,>=,<= )
    == loose equality operator
    ===  Strict equality operator
4. Logical Operator(&&,||,!)
5. String Operator (+)
6. increment and Decrement(++,--)


Arithmetic Operator(+,-,*,/,%)
================================
let a=10;
let b=20;
Console.log(a+b);//20
Console.log(b-a);//10
Console.log(b*a);//200
Console.log(b/2);//10
Console.log(b%2);//0

Assigmenent Operator(=,+=,-=,*=,%=,/=)
======================================

let a=5
let b=2;

a+=b // a=a+b
a-=b // a=a-b
a*=b // a=a*b
a/=b // a=a/b
a%=b // a=a%b

 Comparison Operator(==, ===,>,<,>=,<= )     ==> return the true or false boolean values
 ========================================

 let x=10;
 let y=20;
 Console.log(x==y); //false
 Console.log(x===y);//false
 Console.log(x>y);//false
 Console.log(x<y);//true
 Console.log(x>=10);//true
 Console.log(x<=10);//true

Logical Operator(&&,||,!)

  Console.log('admin'=='admin' && 'pass'=='pass')

Logical And(&&)
  Condition1   condition2   output
  True          True          True
  False         True          False
  True          False         False
  False         False         False
Logical And(||)
  Condition1   condition2   output
  True          True          True
  False         True          True
  True          False         True
  False         False         False

Logical Not(!)
  true ===> false
  false ===> true

String Operator (+)
===================

   "Javascript"+"Playwright"===> javascriptPlaywright


increment(++) and Decrement(--)
=============================

  let number =5;

  number++ ; //  number=number+1

  number--;// number=number-1