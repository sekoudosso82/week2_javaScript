// my solution 

let x = prompt("Enter a number to test as a prime number: ");
let result = isPrime(x, 2);

if (result)
    alert(x+ " is prime!");
else
    alert(x+ " is not prime");

function isPrime(number, divisor=2) {
    if (number == 1){ 
        return false;
    }
    else if (number == 2){ 
        return true;
    }
    if (number % divisor ==0){ return false; }
    
    return isPrime(number, divisor+1);  
}
