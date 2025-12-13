

// Array Destructuring 

   // allows you to extract values from an array 
   // assign them to variables in a single line

   const number=[10,20]

   //const [a,b]=number;  //Array Destructuring 

   //console.log(a,b)

   // without Array Destructuring
   let a=number[0]
   let b=number[1]

   let nums1=[20,10,30] // you can skip the unwanted values using commas

   const [i, ,j]=nums1;

   console.log(i,j)

   const nums2=[5]
    
   const [a1=1,b1=2]=nums2; //  defult values- if array doesnot have enough value then defult value is used

   console.log(a1,b1)


 let x=10;
 let y=20;
 // x=20 y=10

 [x,y]=[y,x]  // swap the values

 console.log(x,y)

 const arr=[1,2,3,5]
 const [first,...rest]=arr; // rest operator used to store the remaining values

 console.log(first,rest)


 function getValues()
 {
    return [100,200]
 }

   const [x1,y1]=getValues()
   console.log(x1,y1)