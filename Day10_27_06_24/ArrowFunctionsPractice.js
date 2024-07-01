//Arrow function..
const materials = ["Hydrozen","Helium","lithuum","Berlium"];
console.log(materials.map((material) => material.length));

function greetings(input){
    console.log(`Hello ${input}`);
}
greetings("John");

const greetings1 = (fullName) =>{
        console.log(`Hello ${fullName}`);
}
greetings1("Vasu");

const greetings2 = (val1,val2) => val1+val2;
console.log(greetings2(20,45)); //65

const myArray = [1,2,3,4,5];
myArray.forEach((item) =>console.log(item));

const SumOfArray = (input) => {
    let sum = 0;
    for(let i=0 ; i<input.length ; i++){
        sum = sum + input[i];
    }
    return sum;

}
console.log(SumOfArray([2,3,4,5,6,7]));


const findEven = (input) =>{
    let ans = [];
    for(let i=0 ; i<input.length ; i++){
        if(input[i]%2 === 0){
            ans.push(input[i]);
        }
    }
    return ans;
}
let arr1 = [23,67,46,78,89,30];
console.log(findEven(arr));

const findUpper = (str) => str.toUpperCase();
console.log(findUpper("vasudevarao killi"));

const calculateFact = (input) => {
    let fact = 1;
    for(let i=1 ; i<=input ; i++){
        fact = fact * i;
    }
    return fact;
}
let val = 5;
console.log(calculateFact(val));

const findMax = (arr) =>{
    let hig = arr[0];
    for(let i=1 ; i<arr.length ; i++){
        if(arr[i]>hig){
            hig = arr[i];
        }
    }
    return hig;
}
let v1 = [1,2,3,4,5];
console.log(findMax(v1));

const findVowels = (str) =>{
    let count = 0;
    let str1 = str.toLowerCase();
    for(let i=0 ; i<str1.length ; i++){
        if(str1.charAt(i) === 'a' || str1.charAt(i) === 'e' || str1.charAt(i) === 'i' ||str1.charAt(i) === 'o' || str1.charAt(i) === 'u'){
            count++;
        }
        
    }
    return count;
}
console.log(findVowels("Hello World"));

const arraySqr = (input) =>{
    let ans = [];
    for(let i=0 ; i<input.length ; i++){
        ans[i] = input[i] * input[i];
    }
    return ans;
}
let arr=[1,2,3,4,5];
console.log(arraySqr(arr));

const concateStr = (i1,i2) => i1.concat(i2);
console.log(concateStr("Hello","World"));

const reverseStr = (str) =>{
    
    let ans = "";
    for(let i= str.length-1 ; i>=0 ; i--){
        ans = ans+str.charAt(i);
    }
    return ans;
}
// console.log(reverseStr("Helloo"));


const isPalindrome = (str) =>{
    let ans = '';
    for(let i= str.length-1 ; i>=0 ; i--){
            ans = ans+str.charAt(i);
    }
   if(ans === str){
    return true;
   }else{
    return false;
   }

}
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false