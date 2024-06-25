function capitalizeWords(str){
    return str.toUpperCase();
}
console.log(capitalizeWords('js string exercises'));
//"JS STRING EXERCISES"

function unCapitalizeWords(str){
    return str.toLowerCase();
}
console.log(unCapitalizeWords('JS STRING EXERCISES'));
//"js string exercises"

function isUpperCaseAt(str,i){
    let ans = str.charAt(i) >= 'A' && str.charAt(i) <= 'Z' ? true : false;
    return ans;
}
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
//false

function isLowerCaseAt(str,i){
    let ans = (str.charAt(i) >= 'a' && str.charAt(i) <= 'z')? true:false;
    return ans;
}
console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
//

function humanize(num){
    const val = ['th','st','nd','rd'];
    let v1 = num%100;
    if(v1 >= 11 && v1 <= 13){
        return v1 + 'th';
    }else{
    let v2 = num%10;
    return num + (val[v2]|| val[0]);
}
}
console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));
// "1st"
// "20th"
// "302nd"

function startsWith(str1,str2){
    let val = (str1.startsWith(str2))?true:false;
    return val;
}
console.log(startsWith('js string exercises', 'js'));
//true

function endsWith(str1,str2){
    let ans = (str1.endsWith(str2))?true:false;
    return ans;
}
console.log(endsWith('JS string exercises', 'exercises'));
//true

