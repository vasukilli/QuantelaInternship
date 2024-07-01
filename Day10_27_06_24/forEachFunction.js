const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },//0
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },//1
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },//2
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }//3
  ];
  staffsDetails.forEach((staffDetail , index) =>{
    let sentence = `index ${index} : My name is ${staffDetail.name} , my age is ${staffDetail['age']} , my salary is ${staffDetail["salary"]}
    in the currency ${staffDetail.currency}`;
    console.log(sentence);
  });
staffsDetails.forEach((stafDetail,index,array) => {
  console.log(array);
}
);
let totalCurrency = 0;
staffsDetails.forEach((staffDetail) =>{
    totalCurrency = totalCurrency + staffDetail.salary;

});
console.log("Total currency is :" + totalCurrency + " USD");

staffsDetails.forEach((stafDetail) => {
    let v1 = stafDetail.name;
    let v2 = stafDetail.salary;
    if(v2 >= 4000){
        console.log(v1);
    }

});

staffsDetails.forEach(({name,salary}) =>{
    if(salary <= 4000){
        console.log(name);
    }
});

let arrOne = [32, 45, 63, 36, 24, 11];
let ans = arrOne.map((val) =>{
     return val * 5;
});
console.log(ans);