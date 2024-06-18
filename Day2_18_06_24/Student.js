const Student = { //key : value
    fullName : "Vasudeva rao killi",
    age : 22,
    cgpa : 8.2,
    isPass : false
}
Student['fullName'] = "Kalyani";
Student['age'] = Student['age'] + 1;

if(Student['isPass']){
    console.log(Student['fullName'] +" " + Student['age'] +" "+Student['cgpa']);
}else{
    console.log("Student not passed the exam");
}

console.log(Student["fullName"]);
console.log(Student["age"]);
console.log(Student['cgpa']);
