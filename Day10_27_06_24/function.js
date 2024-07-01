function findVowel(arr){
    let count = 0;
    //let arr = input.split('');
    for(let i=0 ; i<arr.length ; i++){
        if(arr.charAt(i) === 'a' || arr.charAt(i) === 'e' || arr.charAt(i) === 'i' || arr.charAt(i) === 'o' || arr.charAt(i) === 'u'){
        count++;
        }
    }
    return count;

}
let str = 'aeiou';
console.log(findVowel(str));

const ans = (arr) =>{
    //let arr = input.split('');
    let count = 0;
    for(let i=0 ; i<arr.length ; i++){
        if(arr.charAt(i) === 'a' || arr.charAt(i) === 'e' || arr.charAt(i) === 'i' || arr.charAt(i) === 'o' || arr.charAt(i) === 'u'){
              count++;
             }
    }
    return count;
}
console.log(ans("example"));