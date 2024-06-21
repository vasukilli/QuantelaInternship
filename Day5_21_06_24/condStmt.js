let user_num = "25";
let val = prompt("Enter a guess number");
while(user_num != val){
    val = prompt("your guseesing is wrong , reenter number!");
}

console.log("Congratulation !!");

//switch case...
const expression = '';
switch(expression){
    case 'banana' : console.log('present banana rate is 25rs per 6');
    break;
    case 'apple' :
    case 'papaya' : console.log('apple and banana same rate');
    break;
    default : console.log('Fruits are not available');
}

const message = '20';
switch(message){
    case 'say_hi' :{
        const info = 'Hi';
        console.log(info);
    }
    break;
    case 'say_hello':{
        const info = 'Hello';
        console.log(info);
    }
    break;
    default : console.log("i dont get any expression from ur side");
} 
// for-of loop it is only for iterating on strings and arrays
const fullName = 'Vasudevarao killi';//strings
let count1 = 0;
for(let val of fullName){
    console.log(count + '=' + val);
    count++;
}
console.log("The number of characters presented :" + count); 
const arr = [12,5,7,8,9];
let count = 0;
for(let i of arr){
    console.log(i);
    count++;
}
console.log(count); 

//for - in loop it is for objects and arrays only

const student ={
    fullName : "vasudeva rao killi",
    age : 22,
    salary : 50000,
    state : "Andhrapradesh",
    isDeveloper : true

};
if(student['isDeveloper']){
    let fields_count = 0;
    for(let key in student){
        console.log(key + " " + student[key]);
    }
}else{
    console.log("He is not a developer");
}
console.log(student.fullName + " " + student.age + " " + student.salary + 
    " " + student.state);
