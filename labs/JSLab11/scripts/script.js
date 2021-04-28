/*Explanation
Loops allow us to repeat a block of code so long as 
a particular condition is true. 

We have three types of loops.
while(somecondition){
    instructions
} 

do{

}while(somecondition);

for(initialization statement; condition; update){

}
*/ 

/*Example
We're really excited to be coding JavaScript, so 
the following loops will print YAY! to the console 
3 times each. */ 
console.log("While loop:");
let i = 0;
while(i<3){
    console.log("YAY!");
    i++;
}

console.log("Do while loop:");
do{
    console.log("YAY!");
    i--;
}while(i>0);

console.log("For loop:");
for(i =0; i<3; i ++){
    console.log("YAY!");
}

/*Your turn
Take the following for loop
that prints out the numbers 1-5. 
Write equivalent versions of the loop using 
while and do while loops. 
*/ 
console.log("For loop: 1-5");
for(let number = 1; number<=5; number++){
    console.log(number);
}

console.log("while loop: 1-5");
i = 1
while(i<6){
    console.log(i);
    i++;
}

console.log("Do while loop:1-5");
i = 1
do{
    console.log(i);
    i++;
}while(i<6);

/*Example 
We can combine conditional statements 
and loops to make more complex programs.*/ 
//Print every whole number except those divisible by 3
//up to 9.
console.log("\n\nMore complex program");
for (let j = 1; j<9; j++){
    if(j % 3 === 0){
        console.log("Divisble by 3");
    }else{
        console.log(j);
    }
}

/*Your turn
Uses a do-while loop to print only the odd number between
1 and 9, inclusive. */

console.log("Do while loop to print only the odd number between 1 and 9, inclusive.");
i = 1
do{
    if (i%2 != 0){
        console.log(i);
    }
    i++;
}while(i<10);
