// function add(a,b){
//     return (a+b);
// }
// //module.exports = add;
// //module.exports = "vasudeva rao killi";
// function sub(a,b){
//     return (a-b);
// }
// function mul(a,b){
//     return a*b;
// }
// // module.exports = {
// //     addFn : add,
// //     subFn : sub,
// //     mulFn : mul,
// // };
// module.exports = {
//     add,
//     sub,
//     mul,
// }
function add(a,b){
     return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function mod(a,b){
    return a%b;
}
module.exports ={
    add,
    subFn : sub,
    mulFn : mul,
    divFn : div,
    modFn : mod,
};