let marks =[20,40,60,70];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);

 let heros = ["spiderMan","superMan","superWomen","ironMan","Hulk","Batman"];
// for(let i=0 ; i<heros.length ; i++){
//     console.log(heros[i]);
// }
for(let val of heros){
    console.log(val);
}
//let i=hros.length;
for(let val1 of heros){ //it returs values
    console.log(val1.toUpperCase());
}
for(let i in heros){ //it return index values
    console.log(i);
}

let marks = [85,97,44,37,76,60];
let count = marks.length;
let sum = 0;
for(let i=0 ; i<count ; i++){
    sum = sum + marks[i];
}
let average = sum/count;
console.log(`the sum of the marks is ${sum}`);
console.log(`The average marks of students are ${average}`);
let prices = [250,645,300,900,50];

let i = 0;
for(let val of prices){
    let offer = val/10;
    prices[i] = prices[i]-offer;
    console.log(`after offer = ${prices[i]}`);
    i++;
}
console.log(prices);

let items = [34.5,67,68.9,637.98,89];

for(let i=0 ; i<items.length ; i++){
    let val1 = items[i]/10;
    items[i] = items[i] - val1;
    console.log(`after offer ${items[i]}`);
}
console.log(items);
let items = ["idli","chapathi","dosa","pannir"];
items.push("chicken");
items.push("biryani","mutton","egg");
let deleted_item = items.pop();//delete from

console.log(items);
console.log(deleted_item);

let val = items.toString();
console.log(val);

let marvel_heros = ["thor","spiderman","ironman"];
let dc_heros = ['superman',"batman"];
let indianHros = ["krish","sakthiman"];
let heros = marvel_heros.concat(dc_heros,indianHros);
console.log(heros);

let a = ["vasu","deva","rao"];
let ans = a.unshift("killi");
console.log(a);
let ans2 = a.shift();
console.log(a);
console.log(ans2);

let items = ["idli","chapathi","dosa","pannir"];
let ans = items.slice(1,3);
console.log(ans);

let arr = [1,2,3,4,5,6,7,8];
arr.splice(2,3,222,333,444);
console.log(arr);

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
let val1 = companies.shift();
console.log(companies);
companies.splice(2,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);