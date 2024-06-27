function is_array(input){
    return Array.isArray(input)?true:false;
}
console.log(is_array('w3resource'));//false
console.log(is_array([1, 2, 4, 0]));//true

function array_Clone(arr1){
    return arr1.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function first(arr1 , n){
    let arr2 = [];
    if(n<0){
        return [];
    }else if(n === undefined || n === null){
        //i=0
        return arr1[0];
    
    }else if(n > arr1.length){
        n = arr1.length;
    }
    for(let i=0 ; i<n ; i++){
        arr2[i] = arr1[i];
    }
    return arr2;
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function last(arr,n){
    let ans = [];
    arr = arr.reverse();//-2,0,9,7
    if(n===null || n === undefined){
        return arr[0];
    }else if(n > arr.length){
        n = arr.length;
    }else{
        for(let i=0 ; i<n ; i++){
            
            ans[i] = arr[i];
        }
    }
    return ans.reverse();
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]
function ans(myColor){
    //let myColor = ["Red", "Green", "White", "Black"]; 
    let Ans = "";
    for(let i in myColor){
        Ans = Ans + `${i}` +',' ;
    }
    Ans =Ans.slice(0,-2);
    return ans;
}
let Color = ["Red", "Green", "White", "Black"];
console.log(ans(Color));
//let myColor = ["Red", "Green", "White", "Black"];

// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-)
// between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function findNum(num){
    let ans ="";
    for(let i=0 ; i<num.length ; i++){
        //let char = num.charAt(i);
        if(num.charAt(i) % 2 === 0 && num.charAt(i+1) % 2 === 0){
            ans = ans + num.charAt(i) +"-" + num.charAt(i+1);
        }
    }
    return ans;
}
let Num = "025468";
console.log(findNum(Num));


function sortArray(arr){
     //let ans = [];
     for(let i=0 ; i<arr.length ; i++){
        for(let j=i+1 ; j<arr.length ; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
     }
     return arr;
}
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(sortArray(arr1));
// -4,-3,1,2,3,5,6,7,8



function findCount(arr){
    let count = 0;
    for(let i=0 ; i<arr.length ; i++){
        for(let j=i+1 ; j<arr.length ; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
    }
    return count;
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(findCount(arr1));
//Output : a ( 5 times )

//'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function convertUpper(input){
    let ans = input.split(" ");
    let result = "";
    for(let i=0 ; i<ans.length ; i++){
       result += ans[i].charAt(0).toLowerCase() + ans[i].slice(1).toUpperCase() + " ";
    }
    return result.trim();
}
let val = "The Quick Brown Fox";
console.log(convertUpper(val));


var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(let i in a){
    console.log("row :" + i);

    for(let j in a[i]){
        console.log(" " + a[i][j]);
    }
}