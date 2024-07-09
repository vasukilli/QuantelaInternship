// 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

const findMaxStr = (input) =>{
    let strArr = input.split(' ');
    let max = strArr[0].length;
    for(let i=1 ; i<strArr.length ; i++){
       if(strArr[i].length > max){
        max = strArr[i].length;
        return strArr[i];
       }
    }
}
let str1 = "Web Development Tutorial";
console.log(findMaxStr(str));

// Example string : 'The quick brown fox'
// Expected Output : 5

const findVowels = (input) =>{
    let count = 0;
    input = input.toLowerCase();
    for(let i=0 ; i<str.length ; i++){
      if(input.charAt(i) === 'a' || input.charAt(i) === 'e' || input.charAt(i) === 'i' || input.charAt(i) === 'o' || input.charAt(i) === 'u'){
          count++;
      }
    }
    return count;
}
let str = 'The quick brown fox aeiou';
console.log(findVowels(str));

//8. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.

const findPrime = (input) =>{
    if(input <= 1){
        return false;
    }
    if(input === 2){
        return true;
    }else{
        for(let i=2 ; i<Math.sqrt(input) ; i++){
            if(input%i === 0){
                return false;
            }
        }
    }
    return true;
}
let val = 8;
console.log(findPrime(val));

const find = (input) =>{
    return typeof(input);
}
console.log(find(123));//number
console.log(find("vasu"));//string
console.log(find({}));//object
console.log(find([]));//object
console.log(find(null));//null
console.log(find(undefined));//undefined
console.log(find(function() {}));//function
console.log(find(false));//boolean

// Write a JavaScript function which returns the n rows by n columns identity matrix.
const findMatrix = (a) =>{
    let i,j;
    for(i=0 ; i<a ; i++){
        for(j=0 ; j<a ; j++){
            if(i===j){
                console.log(`${1}`);
            }else{
                console.log(`${0}`);
            }
        }
        console.log("...........");
    }

}
findMatrix(4);

// 11. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

const findLowHigh = (input) =>{
      for(let i=0 ; i<input.length ; i++){
        for(let j=i+1 ; j<input.length ; j++){
            if(input[i] > input[j]){
                let temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
      }
      return `lowest value is ${input[1]} and greatest value is ${input[input.length-2]}`;
}
let array = [1,2,3,4,5];
console.log(findLowHigh(array));

//12. Write a JavaScript function that checks whether a number is perfect.

const isPerfect = (input) =>{
     temp = input;
    let sum = 0;
    for(let i=1 ; i<temp ; i++){
        if(temp%i === 0){
            sum = sum + i;
            continue;
        }
    }
    if(sum === input){
        return true;
    }else{
        return false;
    }
}
let number = 8128;
console.log(isPerfect(number));

//Write a JavaScript function to compute the factors of a positive integer.
let j=0;
const factors = (input) =>{
    let arr = [];
    for(let i=1 ; i<=input ; i++){
        if(input%i === 0){
            arr[j] = i;
            j++;
        }

    }
    return arr;

}
console.log(factors(15));
console.log(factors(16));
console.log(factors(17));
// 14. Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

const amountTocoins = (input,arr) =>{
    let arr1 = [];
    for(let i=0 ; i<arr.length ; i++){
        while(input>=arr[i]){
            input = input - arr[i];
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
// 15. Write a JavaScript function to compute the value of bn where n is 
// the exponent and b is the base. Accept b and n from the user and display the results.
const findExpo = (a,b) =>{
    let result = Math.pow(a,b);
    return result;
}
console.log(findExpo(2,3));