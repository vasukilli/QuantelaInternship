// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
const findUniqeChar = (str) =>{
    let ans = '';
    for(let i=0 ; i<str.length ; i++){
        let isUniqe = true;
        for(let j=i+1 ; j<str.length ; j++){
            if(str.charAt(i) === str.charAt(j)){
                isUniqe = false;
                break;
                // ans = ans + str.charAt(i);
                // continue;
            }
        }
        if(isUniqe){
            ans = ans + str.charAt(i);
        }
    }
    return ans;
}
console.log(findUniqeChar("thequickbrownfoxjumpsoverthelazydog"));

const countLetterOccurrences = (input) =>{
    let countObj = {};
    for(let char of input){
        if(/[a-zA-Z]/.test(char)){
            char = char.toLowerCase();
            if(countObj[char]){
                countObj[char]++;
            }else{
                countObj[char] = 1;
            }
        }
    }
    return countObj;
}
const testString = "The quick brown fox jumps over the lazy dog";
console.log(countLetterOccurrences(testString));

//Write a JavaScript function that returns array elements larger than a number.

const filterNumbers = (input) =>{
    let newArray = input.filter((val) =>{
        return val>=10;
    });
    return newArray;
}
var result = [11, 45, 4, 31, 64, 10];
console.log(filterNumbers(result));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count 
// the number of occurrences of the specified letter within the string.
// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2

const countOfLatter = (input,letter) =>{
    let count = 0;
    for(let i=0 ; i<input.length ; i++){
        if(input.charAt(i) === letter){
            count++;
        }
    }
    return count;
}
console.log(countOfLatter('w3resource.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

const findNotRepeate = (str) =>{
    for(let i=0 ; i<str.length ; i++){
        let count =1;
        for(let j=i+1 ; j<str.length ; j++){
            if(str.charAt(i) === str.charAt(j)){
                 count++;
                 //continue;
                break;
            }
        }
        if(count === 1){
            return str.charAt(i);
        }
    }
    return null;
}
console.log(findNotRepeate('abacddbec'));

const sortArray = (input) =>{
    for(let i=0 ; i<input.length ; i++){
        for(let j=i+1 ; j<input.length ; j++){
            if(input[i] < input[j]){
                let temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
    }
    return input;
}
let arr =  [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log(sortArray(arr));

// 25. Write a JavaScript function that accepts a list of country names as
//  input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

const Longest_Country_Name = (strArr) =>{
    let ans = '';
    let max = strArr[0].length;
    for(let i=1 ; i<strArr.length ; i++){
        if(strArr[i].length > max){
            ans = ans + strArr[i];
        }
    }
    return ans;
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));