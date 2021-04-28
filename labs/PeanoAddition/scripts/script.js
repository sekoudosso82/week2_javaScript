

let x = prompt("Enter a first number to add:");
 x = parseInt(x);
let y = prompt("Enter a second number to add:");
y = parseInt(y);

// regular solution 
console.log("regular solution: ")

console.log(peanoAddition(x, y));

function peanoAddition(x, y) {
    return (x + y) ;
}

// recursive solution 
console.log("recursive solution: ")

function peanoAdditionRecursive(x, y) {
    if (y == 0) { return x }
    
    

    return peanoAdditionRecursive(x+1, y-1) ;
}

console.log(peanoAdditionRecursive(x, y));