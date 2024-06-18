// var const
var a = 24;
var a = 25;
var a = 86;
//var c = a;
//redeclared and updated
//console.log(a);
//console.log(a);

let b = 20;
let e = 30;
let d = 40;
//let b = 50;//canot be re declared
//console.log(b);
{
    let a;
    a = 20;
    console.log(a); // within the block we can update the variable.
}
{
a = 30;
console.log(a);
};
const f = 50; // const that means fixed we cant do any re-declared and updated.
//const f = 60;
console.log(f);
{
    const g = 30;
    console.log(g);
}{
    const g = 40;
    console.log(g);
}
//console.log(g);