function sum_sq(arr){
    let sum = 0;
    for(let i=0 ; i<arr.length ; i++){
        sum += Math.pow(arr[i],2);
    }
    return sum;
}
console.log(sum_sq([0, 1, 2, 3, 4]));

//Write a JavaScript program to compute the sum and product of an array of integers.
function sumAndProduct(arr){
    let sum = 0;
    let product = 1;
    for(let i=0 ; i<arr.length ; i++){
        sum += arr[i];
        product = product * arr[i];
    }
    return `the sum is ${sum} and product is ${product}`;
}
console.log(sumAndProduct([0, 1, 2, 3, 4]));

//remove duplicates from an array

function removeDupli(arr){
    let ans = [];
   // let count =1;
   let seen = {};
    for(let i= 0 ; i<arr.length ; i++){
        if(!seen(arr[i])){
            seen(arr[i]) = true;
            ans.push(arr[i]);
        }
    }
    return ans;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log(removeDupli(Mynum));

function leap_year_range(start=2000,end=2012){
    let yearArr = []; //2000,2001,2002,2003,.....2012
    let leepYear = [];
    for(let i=start ; i<= end ; i++){
        yearArr.push(i);
    }
    for(let year in yearArr){
        if((year%4 === 0 && year%100 !== 0 )||(year % 400 === 0)){
            leepYear.push(yearArr[year]);
        }
    }
    return leepYear;
}
console.log(leap_year_range(2000, 2012));

var items = [1, 2, 3, 4, 5, 7, 8, 9];
//Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4

function binary_Search(array,n){
    for(let i=0 ; i<array.length ; i++){
        if(array[i] === n){
            return i;
            //continue;
        }
        //return -1;
    }
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));
console.log(binary_Search(items, 5));

function addArrays(item1,item2){
   // let x=0;
    let ans = [];
    if((item1.length === item2.length) || (item1.length <= item2.length)){
        item1.push(0);
        for(let i=0 ; i<item1.length ; i++){
            
                ans[i] = item1[i] + item2[i];
            
        }
    }
    return ans;
}
let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
console.log(addArrays(array1,array2));
// Expected Output :
// [4, 5, 8, 10, 12, 13]

function find_duplicate_in_array(input){
    let ans = [];
    let count =1 ;
    for(let i=0 ; i<input.length ; i++){
        for(let j=i+1 ; j<input.length ; j++){
            count = count+1;;
        }
        if(count === 2){
            ans.push(input[i]);
        }
    }
    return ans;
}
console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

function countArray(input){
    let count = 0;
    for(let i=0 ; i<input.length ; i++){
        if(Array.isArray(input[i])){
            count++;
        }
    }
    return count;
}
console.log(countArray([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]));
console.log(countArray([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]));

// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]

function findNan(input){
   let arr = [];
   for(let i=0 ; i<input.length ; i++){
    if(Number.isNaN(input[i])){
        arr.push(i);
    }else{
        let str = input.toString();
        if(!str.includes(NaN)){
            return str.split();
        }
    }
   }
   return arr;
}
console.log(findNan([2, NaN, 8, 16, 32]));
console.log(findNan([2, 4, NaN, 16, 32, NaN]));
console.log(findNan([2, 4, 16, 32]));



function findFactor(input){
    for(let i=0 ; i<input.length ; i++){
        if(input[i+1]%input[i] === 0){
            return true;
        }else{
            return false;
        }
    }
}
//let arr = [2, 4, 8, 16, 32];
//let arr = [2, 4, 16, 32, 64];
let arr = [2, 4, 16, 32, 68]
console.log(findFactor(arr));
// // 2 is a factor of 4
// // 4 is a factor of 8
// // 8 is a factor of 16
// // 16 is a factor of 32

// Test Data :
// ([2, 4, 8, 16, 32]) -> true
// ([2, 4, 16, 32, 64]) -> true
// ([2, 4, 16, 32, 68]) -> false
