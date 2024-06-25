function escape_html(str){
    let map = {
        '&':"&amp;",
        '<':"&lt;",
        '>':"&gt;",
        '"':"&qot",
        "'":"&#39"
    }
    for(let key in map){
        for(let i=0 ; i<str.length ; i++){
            if(str.charAt(i) === key){
               return str.replace(/[&<>,'"]/g,map[key]);
            }
        }
    }
}
console.log(escape_html('PHP & MySQL'));
console.log(escape_html('3 > 2'));

function remove_non_ascii(str){
    return str.replace(/[^\x20-\x7E]/g,'');//32-126 ascii characters replace with empty
    
}
console.log(remove_non_ascii('???????PHP-MySQL??????'));

function remove_non_word(str){
    return str.replace(/[^\w\s-]/g,'');
}
console.log(remove_non_word('PHP ~!@#$%^&*()+-={}[]|\\:";\'/?><., MySQL'));

console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."

function sentenceCase(str){
    let arr = str.split(" ");
    let ans = "";
    for(let i=0 ; i<arr.length ; i++){
        ans = ans + arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase() + " ";
    }
    return ans.trim();
}
console.log(sentenceCase('PHP exercises. python exercises.'));

function strip_html_tags(str){
    return str.replace(/<\/?[^>]+(>|$)/g,'');
}
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));


function compare_strings(str1,str2){
    let v11 = str1.toLowerCase();
    let v22 = str2.toLowerCase();
    if(v11 === v22){
        return true;
    }else{
        return false;
    }
}
console.log(compare_strings('abcd', 'AbcD'));//true
console.log(compare_strings('ABCD', 'Abce'));//false



function case_insensitive_search(str1,str2){
    let v1 = str1.toUpperCase();
    let v2 = str2.toUpperCase()
    let ans = (v1.endsWith(v2))?"Matched":"Not Matched";
    return ans;
}
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
//"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
//"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
//"Not Matched"

function Uncapitalize(str){
    return str[0].toLowerCase()+str.slice(1);
}
console.log(Uncapitalize('Js string exercises'));
//"js string exercises"


function unCapitalize_Words(str){
    let arr = str.split(" ");
    let ans = "";
    for(let i=0 ; i<arr.length ; i++){
      ans = ans + arr[i].charAt(0).toLowerCase() + arr[i].slice(1) + " ";
    }
    return ans.trim();
}
console.log(unCapitalize_Words('Vasu Deva Rao'));
//"js string exercises"