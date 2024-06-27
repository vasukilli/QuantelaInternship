function merge_array(a1,a2){
    let ans = [];
    ans = a1.concat(a2);
    let result = [];
    for(let i=0 ; i<ans.length ; i++){
        for(let j=i+1 ; j<ans.length ; j++){
            if(ans[i] === ans[j]){
                result.push(ans[i]);
            }
        }
    }
        return result;
    }
    

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
//[3, 2, 30, 1]

function remove_array_element(input,n){
    let ans = [];
    for(let i=0 ; i<input.length ; i++){
        if(input[i] !== n){
            ans.push(input[i]);
        }
    }
    return ans;
}
console.log(remove_array_element([2, 5, 9, 6], 5));


function contains(input,v1){
    for(let i=0 ; i<input.length ; i++){
        if(input[i] === v1){
            return true;
        }
    }
    return false;
}
let arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
//[True]

function nthlargest(input,v){
    for(let i=0 ; i<input.length ; i++){
        for(let j=i+1 ; j<input.length ; j++){
            if(input[i] > input[j]){
                let temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
    }
    return input[v];
}
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
//89

function array_filled(len,item){
    let ans = [];
    for(let i=0 ; i<len ; i++){
        ans.push(item);
    }
    return ans;
}
console.log(array_filled(6, 0));
//[0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11));
//[11, 11, 11, 11]

function array_filled(len , val){
    let ans = [];
    for(let i=0 ; i<len ; i++){
        ans.push(val);
    }
    return ans;
}
console.log(array_filled(3, 'default value'));
//["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
//["password", "password", "password", "password"]

function filter_array_values(input){
    let ans = [];
    for(let i=0 ; i<input.length ; i++){
        if(input[i] !== null && input[i] !== false && input[i] !== 0 && input[i] !== ''){
            ans.push(input[i]);
        }
    }
    return ans;
}
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
//[58, "abcd", true]

// 22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
function union(array1,array2){
    return Array.from(new Set([...array1,...array2]));
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));
//[1, 2, 3, 10, 100]

function orderData(input){
    for(let i in input){
        for(let j in input[i]){
            if(input[i] === libraryID){
            let temp = input[j];
            input[j] = input[i];
            input[i] = temp;
            }

        }

    }
    return input;
}
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
console.log(orderData(library));

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

function findElement(numbers , target){
    let sum = 0;
    for(let i=0 ; i<numbers.length ; i++){
        for(let j=i+1 ; j<numbers.length ; j++){
            if(numbers[i] + numbers[j] === target){
                return `${i} , ${j}`;
            }
        }
    }
}
let numbers= [10,20,10,40,50,60,70];
let target = 50;
console.log(findElement(numbers,target));

// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
function findValues(input){
    let ans = [];
    for(let i=0 ; i<input.length ; i++){
        if(Number.isInteger(input[i])){
            ans.push(input[i]);
        }
    }
    return ans;
}
console.log(findValues([NaN, 0, 15, false, -22, '',undefined, 47, null]));