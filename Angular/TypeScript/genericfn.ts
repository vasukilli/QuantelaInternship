//Generic functions ..
function generFun<Type>(arg : Type) : Type{
      return arg;
}
const out1 = generFun("Hello"); //string
const out2 = generFun(1234); //number
console.log(out1,out2);

//Working with arrays ..
function findLength<Type>(arr : Type[]) : number{
     return arr.length;
}
const out1 = findLength<number>([2,3,4,5,6]); //5
const out2 = findLength<string>(["vasu","deva","rao","killi"]);//4
console.log(out1,out2);

// Multiple type parameters ...
function addValues<u,t>(a : u , b : t) : [u,t]{
     return [a,b];
}
const out1 = addValues<string,number>("vasu",28);
const out2 = addValues<boolean,string>(true,"deva");
const out3 = addValues<boolean,number>(false,45);
console.log(out1);
console.log(out2);
console.log(out3);