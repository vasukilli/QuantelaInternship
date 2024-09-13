// function addFn(a:number,b:number) : number{
//     return a+b;
// }
// console.log(addFn(20,20));

// function subFn(c : number,d : number) : String{
//     return (c-d).toString(16);
// }
// console.log(subFn(10,5));

// const displayMsg  = (name? : string) =>{
//     const suffix = name ? `,${name}` : '.';
//     return "Good Morning" + suffix;

// }
// console.log(displayMsg());
// console.log(displayMsg("vasu"));

// const findPow = (base : number,power : number) =>{
//     return Math.pow(base,power);

// }
// console.log(findPow(24,24));

// const val = (nums : number[]) =>{
//     return nums.reduce((cur,add) => (cur+add));
// }
// console.log(val([10,20,30]));
// console.log(val([100]));

//Function/method overloading
// function addFn(data1 : string , data2 : string) : string;
// function addFn(data1 : number , data2 : number) : number;
// //function addFn(data1 : string , data2 : number) : string;
// function addFn(data1 : any , data2 : any){
//     return data1+data2;
// }
// console.log(addFn("Hello","GFG"));
// console.log(addFn(20,30));
// //console.log(addFn("vasu",40));

// class Data{

//     public displayData(data : number) : string;
//     public displayData(data : string) : number;

//     public displayData(data : any) : any{
//         if(typeof data === 'number'){
//             return data.toString();
//         }
//         if(typeof data === 'string'){
//             return data.length;
//         }
//     }

// }
// let obj = new Data();
// console.log(obj.displayData(12345));//1234(string)
// console.log(obj.displayData("vasu"));//4(number)

// Arrow Functions ...

// const getName = (name : string) : string =>{
//     return name;
// }
// console.log(getName("Geeks for geeks"));

// const addNumbs = (num1 : number,num2 : number) : number =>{
//     return num1+num2;
// }
// console.log(addNumbs(20,40));

// const multiValues = (id : number , name : string , values : number[]) : string =>{
//     return `${id} - ${name} - ${values.join(',')}`;
// }
// console.log(multiValues(1,"vasu",[12,23,34,45]));
// console.log(multiValues(2,"deva",[450,56,78,567]));

const number = new Number(1234535456);
const value : string = number.toPrecision(6);
console.log(value);

const num : number = 23456.68;
const ans:string = num.toFixed(5);
console.log(ans);