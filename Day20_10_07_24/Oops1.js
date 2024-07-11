
// const student = {
//     fullName : "vasu",
//     marks : 93.4,
//     printMarks : function() {
//         console.log("marks =" + this.marks);
//     }
// }

// const employee ={
//     calcTax() {
//        console.log("tax rate is 10%");
//     }
// };
// const vasu ={
//     calcTax(){
//         console.log("tax rate is 20%");//object value accepted here
//     }
// };

// vasu.__proto__ = employee;

// const vasu1 ={
//     salary : 5000
// };
// const vasu2 ={
//     salary : 6000
// };
// const vasu3 ={
//     salary : 7000
// };
// const vasu4 ={
//     salary : 8000
// };

// vasu1.__proto__ = employee;
// vasu2.__proto__ = employee;
// vasu3.__proto__ = employee;

// class toyotaCar{
//     start(){
//         console.log("start");

//     }
//     stop(){
//         console.log("stop");

//     }
//     setBrand(brand){
//        this.brand = brand
          
//     }
// }
// let fortuner = new toyotaCar();
// fortuner.setBrand("Fortuner");
// let lexus = new toyotaCar();
// lexus.setBrand("Lexus");

// class ToyatoCar{
//     constructor(model,milage){
//         this.model = model;
//         this.milage = milage;

//     }
//     start(){
//           console.log("hi i am vasu");
//     }

// }
// let car1 = new ToyatoCar("Apchi",45);
// car1.start();
// let car2 = new ToyatoCar("Rolls Royals" , 60);

//Inheritence

// class person{//parent class
//     constructor(){
//         this.homies = "Homies ";
//     }
//     work(){
//       console.log("no work only eating");
//     }
//     sleep(){
//       console.log("every time sleeping");
//     }
//     eat(){
//       console.log("evry time eating");
//     }
// }
// class Enginner extends person{//child class
//     work(){ //override
//         console.log("Build projects and innovative ideas");
//     }

// }
// class Doctor extends person {//child class
//     work(){ //override
//         console.log("Check health conditions");
//     }

// }
// let p1 = new person();
// let engVasu = new Enginner();
// let docKalyani = new Doctor();

//super keyword

// class person{
//     constructor(name){
//      this.name = "THis is homies";
//      console.log("this is 2nd");
//     }
//     work(){
//         console.log("work is not done");
//     }

// }
// class Engineer extends person{
//     constructor(name){
//         console.log("this is 1st"); 
//         super(name);
//         this.name = name;
//         console.log("this 3rd 1st");

//     }

// }
// let engObj = new Engineer();

let data = "very secured";
class userData{
    
    constructor(name,email){
      this.name = name;
      this.email = email;
    }
    viewData(){
     console.log("The data is " + data);
    }

}
class Admin extends userData{
    constructor(name,email){
        super(name,email);
        data = "updated..";
    }

}
let student1 = new userData("vasu","vasu@email.com");
let student2 = new userData("kalyani","kalyani@email.com");
let student3 = new userData("triveni","triveni@email.com");

let admin1 = new Admin("admin","admin@gmail.com");
