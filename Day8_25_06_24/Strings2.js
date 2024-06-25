// Write a JavaScript function to convert ASCII to Hexadecimal format.
// Test Data :
// console.log(ascii_to_hexa('12'));
// console.log(ascii_to_hexa('100'));

function ascii_to_hexa(str){
    let hexa = "";
    for(let i=0 ; i<str.length ; i++){
        hexa = hexa + str.charCodeAt(i).toString(16);
    }
    return hexa;
}
console.log(ascii_to_hexa('12'));//3132
console.log(ascii_to_hexa('100'));//313030


function hex_to_ascii(str){
    let ascii = '';
    for(let i=0 ; i<str.length ; i++){
        ascii = ascii + str.charAt(i).toString(16).charCodeAt();
    }
    return ascii;
}
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));


function search_word(str1,str2){
    let count = 0;
    //str2 = str2.toString();
    if(str1.includes(str2)){
        count++;
    }
    for(let val of str1){
        if(val === str2){
            count++;
        }
    }
    return `"${str2}" founds ${count} time`;
    

}
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));


function string_endsWith(str1,str2){
    if(str2 === undefined || str2 === null){
        return false;
    }
    if(str1.endsWith(str2)){
        return true;
    }
}
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
console.log(string_endsWith('JS PHP PYTHON',));