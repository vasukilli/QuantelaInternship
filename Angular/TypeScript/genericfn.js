//Generic functions ..
function generFun(arg) {
    return arg;
}
var out1 = generFun("Hello"); //string
var out2 = generFun(1234); //number
console.log(out1, out2);
//Working with arrays ..
function findLength(arr) {
    return arr.length;
}
var out1 = findLength([2, 3, 4, 5, 6]); //5
var out2 = findLength(["vasu", "deva", "rao", "killi"]); //4
console.log(out1, out2);
// Multiple type parameters ...
function addValues(a, b) {
    return [a, b];
}
var out1 = addValues("vasu", 28);
var out2 = addValues(true, "deva");
var out3 = addValues(false, 45);
console.log(out1);
console.log(out2);
console.log(out3);
