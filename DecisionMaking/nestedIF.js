

let age=20;

let personWeight=80;


if(age>=18)
{

     if(personWeight>55)
     {

       console.log("Person eligible to donate blood")

     }


}

isVoterCard=false

if(age>=18)
{
    //outer if block
    console.log("Eligible to vote")
     
        if(!isVoterCard)
        {
            //inner if block
             console.log("They can't vote")
        }


}