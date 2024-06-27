// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
function addNumbers(input){
    let sum = 0;
    for(let i=0 ; i<input.length ; i++){
        if(Number.isInteger(input[i])){
           sum = sum + input[i];
        }
    }
    return sum;
}
console.log(addNumbers([2, "11", 3, "a2", false, 5, 7, 1]));
console.log(addNumbers([2, 3, 0, 5, 7, 8, true, false]));

// (2,3,5,7,1) -> 3
// (2,3,0,5,7,8,-2,-4) -> 0

function findThirdEle(input){
    for(let i=0 ; i<input.length ; i++){
        for(let j=i+1 ; j<input.length ; j++){
            if(input[i] > input[j]){
                let temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
    }
    return input[2];
}
console.log(findThirdEle([2,3,5,7,1]));
console.log(findThirdEle([2,3,0,5,7,8,-2,-4]));

// ([2,3,5,7]) -> true
// ([2,3,5,7,8]) -> false

function isPrime(input){
    //checkPrime = false;
    for(let i=0 ; i<input.length ; i++){
        for(let j=2 ; j<Math.sqrt(input[i]) ; i++){
            if(input[i]%2 === 0){
              return false;
            }
        }
    }
    return true;
}
console.log(isPrime([2,3,5,7]));
console.log(isPrime([2,3,5,7,8]));

function finadFalls(arr){
    let ans = '';
    for(let key in arr){
        if(key === false || key === null){
         ans = ans + `"${key}" : ${arr[key]}`;
        }
    }
    return ans.split();
}
const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' },
};
console.log(finadFalls(obj));
    // Expected Output:
    // {"c":true,"e":1,"g":"a","h":[true,1,"a"],"i":{"l":"a"}}

// est Data :
// [1, 2, 2, 3, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5]
// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

function removeDuplicates(input){
    let uniqElements = new Set(input);
    return Array.from(uniqElements);
    
    
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([1, 2, 3, 4, 5]));
console.log(removeDuplicates([1, -2, -2, 3, 4, -5, -6, -5]));


function difference(input1,input2){
    let unigqe1 = new Set(input1);
    let unigqe2 = new Set(input2);
    
    return Array.from(unigqe1 + unigqe2);
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]


function rangeBetwee(v1,v2){
    let ans = [];
    for(let i=v1 ; i<=v2 ; i++){
        ans.push(i);
    }
    return ans;
}
console.log(rangeBetwee(4, 7));
//[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
//[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

function array_range(v1,v2){
    let ans = Array();
    
    for(let i=0 ; i<v2; i++){
        ans.push(v1+i);
    }
    return ans;
}
console.log(array_range(1, 4));
//[1, 2, 3, 4]
console.log(array_range(-6, 4));
//[-6, -5, -4, -3]
