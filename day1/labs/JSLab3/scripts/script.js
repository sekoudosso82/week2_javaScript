//Your work belongs in this file.

/* Example
Prompt the user for some information */
prompt("What is your name?");

//Now let's print the information
//.... How do we access the result of the prompt?
//We must save the result to a variable

//Let's try again
let favMovie = prompt("What is your favorite movie?");
console.log("Your favorite movie is", favMovie);

/* Your turn 
Ask the user a question.
Print the result */
let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
console.log("Welcome to learning center : " + firstName +" "+ lastName);


/*Exmaple
Recall the alert function from the Hello World assignment.
Alert users to the prompted value */

alert("Your favorite movie is "+ favMovie);

/*Your turn
Use alert to print 
The result of your question is ___ 
___ is the actual result. */
let favoriteCity = prompt("What is your favorite city?");
let favoriteWeather = prompt("What is your weather?");
alert(favoriteCity + " is your favorite city and you prefer " + favoriteWeather);


/* Explanation
alert, console.log, and prompt are all built in
javascript functions. There are many more, but these 
are a good place to start. 

Note that when you use console.log you can give as input 
comma separated values and console.log will print them 
with a space for each comma.

This does not work for alert. Instead we are doing 
something in alert called String concatenation. 
More on this in later labs. For now all you need
to know is that you can use the + operator between 
Strings and other values, getting back a String with
the value included in it. */ 