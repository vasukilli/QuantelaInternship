// class Employee
// {
//     id : number;
//     name : string;
//     age : number;
// }
// const john = new Employee();
// john.id = 1;
// john.name = "john";
// john.age = 24;
// console.log(john);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const vasu = new Employee();
// vasu.id = 2;
// vasu.name = "Vausdeva rao killi";
// vasu.age = 25;
// console.log(vasu);
// class Employee1{
//     id : number;
//     name : string;
//     address : string;
//     constructor(id,name,address){
//         this.id = id;
//         this.name = name;
//         this.address = address;
//     }
//     getNameAndAddress() :string{
//         return `${this.name} stays at ${this.address}`;
//     }
// }
// const john = new Employee1(1,"John","America Ind");
// const vasu = new Employee1(2,"vasu","Newzeland Ind");
// console.log(john);
// console.log(vasu);
// console.log(john.getNameAndAddress());
// console.log(vasu.getNameAndAddress());
//Access Modifiers public,private and protected!
// class Animal{
//     public name : string;
//     private age : number;
//     constructor(name : string, age : number){
//         this.name = name;
//         this.age = age;
//     }
//     getAge() : void{
//         console.log(`${this.name} age is ${this.age}`);
//     }
// }
// const ele = new Animal("Elephant",45);
// ele.getAge();
// //console.log(ele.age);
// Getters and Setters ....methods 
// class Rectangle{
//     private _width : number;
//     private _height : number;
//     constructor(width : number,height : number){
//         this._width = width;
//         this._height = height;
//     }
//     getWidth():number{
//      return this._width;
//     }
//     setHeight(_height : number) : void{
//         if(_height  >= 6 && _height  <= 10){
//             this._height = _height;
//         }
//         this._height = 0;
//     }
//     getArea() : number{
//         const val = this._width * this._height;
//         return val;
//     }
// }
// const rect = new Rectangle(10,5);
// console.log(rect.getArea());
// console.log(rect.getWidth());
// rect.setHeight(3)
// console.log(rect.getArea());
//Inheritance ...
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.work = function () {
        console.log("".concat(this.name, " work done!"));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.Department = function () {
        console.log("".concat(this.name, " is a manager he is in ").concat(this.department, "!"));
    };
    return Manager;
}(Employee));
var manage1 = new Manager("vasu", "chemical");
manage1.work();
manage1.Department();
