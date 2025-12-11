

function display1(myName,rollno,location)
{
    console.log(`my name is ${myName} and rollno is ${rollno}
        location is ${location}`)
}
display1('kumar',123,'chennai')
display1('kumar',567,'trichy')

//default parameter
function mul(value1,pi=3.14)
{
   console.log(value1*pi)
}
mul(10,23)


// Rest operator(...)
function add(...a) //Rest parameter
{
    console.log(a)
}
add(10,20,4,23,23)// args


task:
  1. sum(defaultparameter, paramtert)

  2. sum(p1,p1,dp)

     sum(10)
  3. sum(...a)- string value

    