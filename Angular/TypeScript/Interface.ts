// interface forList{
//     [index:number] : string;
// }
// const values : forList = ["Geeks","for","geeks"]; //0,1,2
// console.log(values);

//Extending property
interface int1{
    data1 : number;
}
interface int2 extends int1{
    data2 : string;
}
const ans1 : int1 = {
    data1 : 234,
}
console.log(ans1.data1);
const ans2 : int2 ={
    data1 : 548,
    data2 : "vasu",
}
console.log(ans2.data2 , ans2.data1);