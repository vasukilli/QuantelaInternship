class findVal{
    static PI : number = 3.14;
    static findCircumStance(radius : number) : number{
        return 2 * this.PI * radius;
    }
}
console.log(findVal.PI);
console.log(findVal.findCircumStance(4));
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.increment = function () {
        return this.count++;
    };
    Test.getValue = function () {
        return this.count;
    };
    Test.count = 0;
    return Test;
}());
console.log(Test.increment());
console.log(Test.increment());
console.log(Test.increment());
console.log(Test.increment());
console.log(Test.increment());
console.log(Test.increment());
