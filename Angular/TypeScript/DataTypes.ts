app.ts
let message: string = 'Hello, TypeScript!';
console.log(message);
let a:number = 20;
let b:string = "vasu";
let c:boolean = true;
let d:null = null;
let e:undefined = undefined;
console.log(a , b , c, d ,e);

let f:any = "vasu"; //string
let g:any = 1234; //number
let h:any = true; //boolean
let i:any = null; //null
let j:any = undefined; //undefined
let k:any = 34556; //number
console.log(f , g, h, i , j , k);

Interface - Structure of an object

interface stdStructure{
    stdId : number,
    stdName : string,
    stdAge : number,
    stdMarks : number
}
const Student : stdStructure = {
    stdId : 101,
    stdName : "vasu",
    stdAge : 22,
    stdMarks : 548
};
console.log(Student);
enum ....
enum Role{
    User, //0
    Admin, //1 
    Block, //2
    Employee, //3
    Customer //4
}
const empRole : Role = Role.Employee;
const custRole : Role = Role.Customer;
console.log(empRole);
console.log(custRole);

Classes ....
class Person{
     name : string;
     age : number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(`my name is ${this.name} , my age ${this.age}`);
    }
}
const person1 = new Person('Vasudeva rao killi',22);
person1.display();


tuples ...
let user :[string,number,boolean];
user = ["vasu",548,true];
console.log(user);

let emp : [id:number,name : string ,age:number];
emp = [101,"deva",22];
console.log(emp);