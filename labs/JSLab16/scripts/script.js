/*Explanation
At their core functions are sets of instructions 
that can be called to run by name. In JavaScript they 
are exceptionally powerful. 

We have already been using built in functions. Now 
we will define some of our own. */

/*Example 
Create a named function. */

function sum(a,b){
    return a+b;
}
//This defines a function sum that gives back the sum of the input to the function.  
//a and b are simply placeholders for the input. They are called parameters. 

console.log(sum(1,2));//this calls the function sum and prints the result

/*Explanation
By using the name of our function followed by parentheses,
we invoke (also referred to as call or execute) the function.
This is done in line 17 inside of our call to console.log.  

The values that we put in between the parentheses when we invoke 
a function are the arguments. 

So the arguements for sum are 1 and 2 in line 17.  

By giving arguements to a function we assign values to the parameters.
Line 17 tells lines 12-14 to run with a = 1 and b=2. 
*/ 

/*Your turn 
Create a function called difference. Return the first parameter 
minus the second. */

function difference(arg1, arg2){
    return arg1 - arg2
}
let x = 5; 
let y = 3;
console.log('difference: ', difference(x, y))
/*Example 
Create an anonymous function- one without a name.*/

//We assign our anonymous function to a variable 
//This variable will allow us to call our function.
let a = function (){
    console.log("Coding is awesome");
}

a();

console.log(a);

/*Your turn 
Create an anonymous function and assign it to a variable. 
The function should print out a fun animal fact to the console. 
It should also execute at least one other instruction of your choosing.

Call your anonymous function. */
let anonymousFunction = function (){
    console.log("I do not know any fun animal fact")

    console.log("My favorite animal is dog ")
}

anonymousFunction()

