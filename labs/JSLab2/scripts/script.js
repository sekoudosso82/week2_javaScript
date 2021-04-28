//Add your work to this file. 

/* Example
This is a variable declaration. 
Also referred to as a variable definition.
It typically will have a keyword and then the name 
of the variable. In this case, the variable is named 
firstVariable. The keyword let indicates to JavaScript
that we are defining a new variable.*/
let firstVariable; 

/* Your turn 
Define a variable named data */
let data;


/* Example
 Here we initialize firstVariable
 In other words we assign it a value for the first
 time. */
 firstVariable = 100;

 /* Now we can use our variable. 
 Let's print it to the console.
 
 Notice that to use our variable we don't need to
 use the keyword let again. We just use the name of 
 the variable.*/
 console.log(firstVariable);


 /*Your turn
 Initialize data to 5000*/
 data = 5000;

 /*Then print your variable to the console.*/
console.log("data: ", data)


/* When you use const, you will need to initialize your variable 
 (assign to it an initial value) in the same line in which you declare it. */

const constVariable = "Can't be changed";
console.log(constVariable)

// re-assigning value to firstVariable and data 

firstVariable ="Potatoes"
console.log("new firstVariable: ", firstVariable)

data = 200;
console.log("new data value: ", data)

// trying to assign new value to const 

/*constVariable = "constVariable Can't be changed"; 
 Uncaught TypeError: invalid assignment to const 'constVariable' */
console.log(constVariable)


var myVar;
myVar = true;
myVar = false;
console.log("myVar: ", myVar);

// what is the difference between let and var?

console.log("varVariable: ",varVariable);
console.log("abc:", abc); // can't access lexical declaration 'abc' before initialization

let abc;
var varVariable;
/*  
    Notice that varVariable prints out as undefined while abc produces an error. 

    Variables defined using let can not be used until after they are defined. 
    Variables defined with var are what we call hoisted. 
    Basically their definition is "hoisted" or moved to the top of the section 
    where they are defined. This is a bit of an oversimplification, but it will 
    serve for now. 

    Finally, note, it's best practice when possible to use let and const. 
    Also, using them will best prepare you for how variables work in Java. 
*/

 