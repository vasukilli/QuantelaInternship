function add(x,y){
    var sum = x+y;
    return sum;
}
function sub(x,y){
    var sub = x-y;
    return sub;
}
function mul(x,y){
    var mul = x*y;
    return mul;
}
function div(x,y){
    var div = x/y;
    return div;
}
function mod(x,y){
    var mod = x% y;
    return mod;
}
// console.log(add(2,3));
// console.log(sub(2,3));
// console.log(mul(2,3));
// console.log(div(2,3));
// console.log(mod(2,3));
module.exports = {
    addFn : add,
    subFn : sub,
    mulFn : mul,
    divFn : div,
    modFn : mod,
}

