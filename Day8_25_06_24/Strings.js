function string_chop(str,n){
    let arr = [];
    if(n === undefined || n === null){
        return [str];
    }
    let i=0;
    while(i<str.length){
        arr[i] = arr.push(str.slice(i,i+n));
        i = i+n;
    }
    return arr;
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));

function count(str1,str2){
    str1 = str1.toLowerCase();
    let arr = str1.split(" ");
    let count = 0
    for(let val of arr){
        if(val === str2){
            count++;
        }
    }
    return count;
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));


function reverseBinary(num){
    let binaryStr = num.toString(2);//1100100
    let reversedStr = binaryStr.split("").reverse().join("");//"0010011"
    let ans = parseInt(reversedStr,2);//19

  return ans;

}
console.log(reverseBinary(100)); // Output: 19
console.log(reverseBinary(1134)); // Output: 945


function repeat_string(ans,num){
    if(num === undefined || num === null){
        return "Error in string or count."
    }
    let str="";
    while(num > 0){
       str = str+ans;
       num--;
    }
    return str;
}
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));

function subStrAfterChars(str,char,position){
    if(position === 'a'){
    return str.substring(0,str.indexOf(char));
    }else if(position === 'b'){
        return str.substring(str.indexOf(char));
    }else{
        return str;
    }
}
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));

function strip(str){
    return str.trim();
}
console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));

function truncate(str,val){
    let arr = str.split(" ");
    let ans ="";
    i=0;
    while(i<val){
    for(let a of arr){
      ans = ans + a;
      i++;

    }
}
return ans;
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));


function alphabetize_string(str){
    if(str === undefined || str === null){
        return '';
    }
    return str.split('').sort().join('');

}
console.log(alphabetize_string('United States'));


function remove_first_occurrence(str,replace_str){
       return str.replace(replace_str,'');
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));