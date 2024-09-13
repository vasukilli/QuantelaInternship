interface user{
    id : number;
    name : string;
    age : number
}

interface employee extends user{
   company : string;
   address : string;
}
const emp : employee = {
    id : 101,
    name : "vausdeva rao",
    age : 22,
    company : "Quantela",
    address : "Ap , india"

}
console.log(emp);

//Using interfaces as types ...

interface car{
    model : string;
    make : string;
    type : string;
}
const arg : car = {
    model : "2014xyz",
    make : "2024",
    type : "Roles-Royel"
}
function displayData(arg : car) : void{
    console.log(`${arg.model} ${arg.make} ${arg.type}`);
}
displayData(arg);

//implementing interfaces...
interface Animal{
    name : string,
    sound() : string;
}
class Dog implements Animal{
    name;
    constructor(name : string){
        this.name = name;
    }
    sound() : string{
        return "bow bow";
    }

}
const obj = new Dog("Banty");
console.log(obj.sound());

//Extending interfaces ....
interface Person{
    name : string;
    age : number;
}
interface Emplyoee extends Person{
    empId : number;
    role : string;
}
const emp1 : Employee = {
    name : "vasu",
    age : 22,
    empId : 1234,
    role : "SAP Developer!"
};
const per1 : Person = {
    name : "Sai",
    age : 23,
}
console.log(emp1);
console.log(emp1.name);
console.log(per1);
console.log(per1.name);

//optional properties....
interface Data{
    title : string;
    author : string;
    year? : number; //optional ...
}
const Book1 : Data = {
    title : "Chemistry!",
    author : "SvRamana",
}
const Book2 : Data  ={
    title : "Physics",
    author : "Ramarao",
    year : 2024
}
console.log(Book1);
console.log(Book2);

//6. Object Destructuring
const person = {
    id : 1,
    name : "vasu",
    age : 24,
    salary : 34000,
};
const {name,age,salary} = person;
console.log(name,age,salary);

//Arry distructing ...

const nums = [23,45,56,78];
const [first,second,third] = nums;
console.log(first,second,third);
