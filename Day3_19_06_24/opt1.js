// Airthematic operators

// +,-,/,%,**,*
let a,b;
a = 10;
b = 20;
console.log("a = " + a + " & " + "b = " + b);
console.log("a + b = " + (a+b));
console.log("a - b = " + (a-b));
console.log("a * b = " + (a*b));
console.log("a / b = " + (a/b));
console.log("a % b = " + (a%b));//modulus operator
console.log("a ** b = " + (a ** b));//exponential operator

a++;
console.log(a);
b = b+1;
console.log(b);
a = a-1; //a--
b = b-1 //b--
console.log("a-- " + "&" + "b-- " + a +" "+ b );

// Assignment operators

// = , += , -= , /= , %= ,**=
// let a = 10;
let b = 20;
console.log(a);
console.log(b);

a += 1;// a=a+1
console.log(a);

b -= 2; //b = b-2
console.log(b);

a /= 10;// a=a/10
console.log(a);

b %= 2 // b=b%2
console.log(b);

a **= 2; //a = a**2
console.log(a);

// comparision operators -- true,false
// == , <= , >= , != , === , !== , < , >

let a = 20;
let b = 30;
let c = (a==b);
console.log(c);

let d = (a != b);
console.log(d);

let e = (a<b);
console.log(e);
let f = (a>b);
console.log(f);

let x = 24; //number
let y = 25; //number
console.log(x === y); // data type and data must be equal then true or else false

let z = 24;//number
console.log(x === z);//datatype and data eqal so true

let k = "vasu"; //string
let l = "deva"; //string
console.log(k === l);//false

let m = "vasu";//string
console.log(k === m);//true

let p = "deva";//string
let q = 20; //number
console.log(p !== q); //true
console.log(k !== m); //false

// logical operators
// && , || , !

let a = "vasu";
let b = "vasu";

let cond1 = a && b; //true
let cond2 = (b==="vasu"); //true
console.log(cond1 && cond2);//true

let c = 24;
let d = 24;
let cond3 = (c == d);//true
let cond4 = ("vasu" == d); //false
console.log(cond3 || cond4);//true

let cond5 = (!cond3);
console.log(cond5);






