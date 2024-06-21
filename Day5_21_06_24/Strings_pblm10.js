/*1. Write a JavaScript function to check whether an 'input' is a string or not.
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false  */

function is_string(input){
     //return typeof input === 'string';
     return typeof input === 'string' ? true : false;
}
console.log(is_string('w3resource'));
console.log(is_string([1,2,4,0])); 

// 2. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

function is_Blank(input){
    if(input.length === 0){
        return true;
    }else{
        return false;
    }
}
console.log(is_Blank(''));
console.log(is_Blank('abc')); 


/*3. Write a JavaScript function to split a string and convert it into an array of words.
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
*/

let str1 = ''; let str2 = '';
function string_to_array(input){
     for(let i=0 ; i<input.length ; i++){
        if(input.charAt(i) === ' '){
            str1 = input.slice(0,i);
        }
            str2 = input.slice(i+1,input.length);
        
     }
     return str1 + " " + str2;
}

function string_to_array(input){
    return input.split(' ');
}
console.log(string_to_array("Robin Singh"));



// 4. Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"


function truncate_string(input1,input2){
    return input1.slice(0,input2)
}
console.log(truncate_string("Robin Singh",4)); 


console.log(abbrev_name("Robin Singh"));
"Robin S."

function abbrev_name(input){
    let str1 = '';
    for(let i=0 ; i<input.length ; i++){
        if(input.charAt(i) === ' '){
        str1 = input.slice(0,i+2);
        }
    }
    return str1;
}
console.log(abbrev_name("Robin Singh")); 

console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"


function string_parameterize(input){
    let str = input.toLowerCase();
    for(let i=0 ; i<input.length ; i++){
        if(str.charAt(i) === ' '){
          str = str.replace(str[i],'-');
        }
    }
    return str;
}
console.log(string_parameterize("Robin Singh from USA."));







