// //console.log("Hi i am from js");
// // function sum(a,b){
// //         return a+b;
// // }
// // console.log(sum(2,3));
// // const math = require("./Math");
// // //console.log(math(45,45));//90
// // //console.log(math);//vasudevarao killi
// // console.log(math.addFn(2,4));//6
// // console.log(math.subFn(24,4));//20
// // console.log(math.mulFn(24,24));//576

// const {add,sub,mul} = require("./Math");
// console.log(add(2,3));
// console.log(sub(3,2));
// console.log(mul(2,3));
const math =  require("./Math");
console.log("The adding of two numbers",math.add(2,3));
console.log("The substracting of ",math.subFn(5,5));
console.log("The multiplication of ",math.mulFn(5,5));
console.log("The divition of ",math.divFn(5,5));
console.log("The mod of ",math.modFn(5,5));
