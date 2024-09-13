class findVal{
    static PI : number = 3.14;
    static findCircumStance(radius : number) : number{
        return 2 * this.PI * radius;
    }
}
console.log(findVal.PI);
console.log(findVal.findCircumStance(4));

class Test{
    static count : number = 0;
    static increment() : number{
        return this.count++;
    }
    static getValue() : number{
        return this.count;
    }
}
console.log(Test.increment());
console.log(Test.increment());
console.log(Test.increment());
console.log(Test.increment());
console.log(Test.increment());
console.log(Test.increment());
