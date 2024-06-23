6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"


function protect_email(email){
    let indexval = email.indexOf('@');//11
    if(indexval === -1){
        return email;
    }
    let userName = email.slice(0,indexval);//robin_singh
    let marked_name = email.slice(0,Math.min(4,userName.length)) + '...';//robi...
    let answer = marked_name + email.slice(indexval); // robi...@example.com
    return answer;
}
console.log(protect_email("robin_singh@example.com"));

console.log(capitalize('js string exercises'));
"Js string exercises"

function capitalize(input){
    let output = input.charAt(0).toUpperCase() + input.slice(1);
    return output;
}
console.log(capitalize('js string exercises'));

9. Write a JavaScript function to capitalize the first letter of each word in a string.
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"

function capitalize_Words(input)
{
    let words = input.split(" ");
    let ans = '';
    for(let i=0 ; i<words.length ; i++){
        ans = ans + words[i].charAt(0).toUpperCase() + words[i].slice(1,words[i].length)+ " ";
    }
    return ans.trim();
}
console.log(capitalize_Words('js string exercises'));

console.log(swapcase('AaBbc'));
"aAbBC"

function swapcase(input){
    let ans = '';
    for(let i=0 ; i<input.length ; i++){
        if(input.charAt(i) >= 'A' && input.charAt(i) <= 'Z'){
         ans = ans + input.charAt(i).toLowerCase();
        }else{
            ans = ans + input.charAt(i).toUpperCase();
        }
    }
    return ans;
}
console.log(swapcase('AaBbc'));

11. Write a JavaScript function to convert a string into camel case.
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));


function camelize(input){
    let ans = '';
    for(let i=0 ; i<input.length ; i++){
        if(input.charAt(i) >= 'A' && input.charAt(i) <= 'Z' || input.charAt(i) >= 'a' && input.charAt(i) <= 'z' ){
           ans = ans + input.charAt(i);
        }
    }
    return ans;
}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));

function camelize(input){
    let ans = '';
    let nextWord = false;
    for(let i=0 ; i<input.length ; i++){
        let char = input.charAt(i);
        if(char === ' ')
        {
           
            nextWord = true;

        }else{
            if(nextWord){
               ans = ans + char.toUpperCase();
               nextWord = false;
            }else{
            ans = ans + char.toLowerCase();
        }
    }
    }
    return ans;
}
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScript Exercises"));
