// 1. Write a JavaScript program to calculate the factorial of a number.  
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is
//  the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
const findFactor = (input) =>{
    let fact = 1;
    if(input === 0){
        return 1;
    }
    for(let i=1 ; i<=input ; i++){
        fact = fact * i;
    }
    return fact;
}
let n = 5;
console.log(findFactor(n));

// 2. Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion. 
function findGCD(a,b)
{
    if(b===0){
        return a;
    }else{
        return findGCD(b , a%b);
    }
}
console.log(findGCD(48,18));

function range(x,y){
    if(x >= y-1){
        return [];
    }
    return [x+1].concat(range(x+1,y));
}
console.log(range(2, 9)); 

// 4. Write a JavaScript program to compute the sum of an array of integers.  
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21
const findSum =(input) =>{
    let sum = 0;
    input.forEach((val) =>{
        sum = sum + val;
    });
    return sum;
}
var array = [1, 2, 3, 4, 5, 6];
console.log(findSum(array));
