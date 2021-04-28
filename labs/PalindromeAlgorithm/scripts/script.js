/*Psuedocode 

algorithm palindrome is
    input: string phrase
    output: true/false result

    length = length of phrase
    c = 0

    while (c <= length/2)
        if (phrase[c] != phrase[length - 1 - c])
            return false
        c = c + 1

    return true

*/

/*My work */

let input = prompt("Enter a phrase:");

console.log(isPalindrome(input));

function isPalindrome(phrase) {
    let length = phrase.length 
    let c = 0
    if (length==0){
        return "empty input"
    }
    while (c <= length/2){
        if (phrase[c] != phrase[length - 1 - c]){
            return false
        }
        c = c + 1
    }
    return true
}

// for example 
console.log(isPalindrome("Step on no pets")) //=> false 
console.log(isPalindrome("step on no pets")) //=> true 