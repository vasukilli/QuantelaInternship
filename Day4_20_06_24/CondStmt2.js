// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even,
// and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
/*let i = 0;
let n = 15;
for(i ; i<=n ; i++){
    if(i%2 === 0){
        console.log(i + " is even");
    }else{
        console.log(i + " is odd");
    }
}

let Students = [["David",80],["Vinoth",77],["Divya",88],["Ishitha",95],["Thomos",68]];
let n = Students.length;//5
let total_marks = 0;//80+77+88+95+68+=
for(let i=0 ; i<n ; i++){
    total_marks = total_marks + Students[i][1];
    var avg = total_marks/n;
}
console.log("The average grade is " + (total_marks)/n);

if(avg < 60){
    console.log("grade : F");
}else if(avg < 70){
    console.log("grade : D");
}else if(avg < 80){
    console.log("grade : C");
}else if(avg <90){
    console.log("grade : B");
}else if(avg < 100){
    console.log("grade : A");
}else{
    console.log("THe studetn not completed exam");
}
    
7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz"
 instead of the number 
and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

for(let i = 0 ; i<= 100 ; i++){
    if(i%3 === 0){
        console.log(i + "Fizz");
    }else if(i%5 === 0){
        console.log(i + "Buzz");
    }else if(i%3 === 0 && i%5 === 0){
        console.log(i + "FizzBuzz");
    }
}
*/
//Write a JavaScript program to find the Armstrong numbers of 3 digits
let a = 153;
var temp = a;
var res = 0;
var count = 0;
while(temp > 0 ){
    var dig1 = temp%10;
    count++;
}
while (temp > 0){
    var dig = temp % 10;
    var rev = (res * 10) + Math.pow(dig,count);
    temp = temp/10;
}
if(a === rev){
    console.log("This is armstrong number");
}else{
    console.log("This is not a armstrong number");
}
