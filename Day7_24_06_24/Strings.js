12. console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));

function uncamelize(val1,val2 =''){
    if(val2 === ""){
        return val1;
    }
    let result = "";
    for(let i=0 ; i<val1.length ; i++){
        let char = val1.charAt(i);
        if(char >= 'A' && char <= 'Z'){
            result = result + val2 + char.toLowerCase();
        }else{
            result = result + char;
        }
    }
    return result;

}
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));

13.console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));



function repeat(val1,val2 = 0){
     if(val2 === 0){
        return val1;
     }else{
        let ans = "";
        while(val2 > 0){
            ans = ans + val1;
            val2 = val2 - 1;
        }
        return ans;
     }
}
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));




    console.log(insert('We are doing some exercises.'));
    console.log(insert('We are doing some exercises.','JavaScript '));
    console.log(insert('We are doing some exercises.','JavaScript ',18));


function insert(val1,val2 ='',position = 1){
     if(position < 0){
        position = 0;
    }else if(position > val1.length){
        position = val1.length;
    }
    return val1.slice(0,position)+ val2 + val1.slice(position);
}
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));


function humanize_format(number){
    if(number === undefined || number === null){
        return '';
    }
        const suffix = ['th','st','nd','rd'];
        let val = number %100;
        if(val >= 11 && val <= 13){
            return number + "th";
        }else{
            let dig = number % 10;
            return number + (suffix[dig] || suffix[0]);
        }
    }


console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));