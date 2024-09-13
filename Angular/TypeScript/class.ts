class Employee
{
    id : number;
    name : string;
    age : number;
}
const john = new Employee();
john.id = 1;
john.name = "john";
john.age = 24;
console.log(john);

const vasu = new Employee();
vasu.id = 2;
vasu.name = "Vausdeva rao killi";
vasu.age = 25;
console.log(vasu);

class Employee1{
    id : number;
    name : string;
    address : string;

    constructor(id,name,address){
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameAndAddress() :string{
        return `${this.name} stays at ${this.address}`;
    }
}
const john = new Employee1(1,"John","America Ind");
const vasu = new Employee1(2,"vasu","Newzeland Ind");
console.log(john);
console.log(vasu);
console.log(john.getNameAndAddress());
console.log(vasu.getNameAndAddress());
 
//Access Modifiers public,private and protected!

class Animal{
    public name : string;
    private age : number;

    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
    getAge() : void{
        console.log(`${this.name} age is ${this.age}`);
    }
}
const ele = new Animal("Elephant",45);
ele.getAge();
//console.log(ele.age);

Getters and Setters ....methods 

class Rectangle{
    private _width : number;
    private _height : number;

    constructor(width : number,height : number){
        this._width = width;
        this._height = height;
    }
    getWidth():number{
     return this._width;
    }
    setHeight(_height : number) : void{
        if(_height  >= 6 && _height  <= 10){
            this._height = _height;
        }
        this._height = 0;
    }
    getArea() : number{
        const val = this._width * this._height;
        return val;
    }

}
const rect = new Rectangle(10,5);
console.log(rect.getArea());
console.log(rect.getWidth());
rect.setHeight(3)
console.log(rect.getArea());

//Inheritance ...
class Employee{
    public name : string;
    constructor(name : string){
        this.name = name;
    }
    work() :void{
        console.log(`${this.name} work done!`);
    }

}
class Manager extends Employee{
    public department : string;
    constructor(name : string,department : string){
        super(name);
        this.department = department;
    }
    Department() : void{
        console.log(`${this.name} is a manager, he is in ${this.department}!`);
    }

}
const manage1 = new Manager("vasu","chemical");
manage1.work();
manage1.Department();
