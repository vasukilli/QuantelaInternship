const reverse = (val) =>{
    let sum = 0;
    while(val > 0){
        let dig = val % 10;
        sum = sum*10 + dig;
        val = Math.floor(val/10);
    }
    return sum;
}
let x = 32243;
console.log(reverse(x));

const findPalindrm = (input) =>{
    let ans = "";
    for(let i=input.length-1 ; i>= 0 ; i--){
        ans = ans + input.charAt(i);
    }
    if(ans === input){
        return true;
    }else{
        return false;
    }
    
}
let str =  "madam";
console.log(findPalindrm(str));