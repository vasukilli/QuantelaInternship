const fs = require("fs");
//fs.writeFileSync("./test.txt","Hi everyone , i am vasudeva rao killi!");
// fs.writeFile("./test.txt","This is asynchronus file",(err) =>{

// });

//Reading data from files
// const result = fs.readFileSync("./Contacts.txt","utf-8");//Synchronus
// console.log("The contacts are :" + result);

//Asynchronous
// const result = fs.readFile("./Contacts.txt","utf-8");
// console.log("The contacts are :" + result);

// fs.readFile("./Contacts.txt","utf-8" , (err,result) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("The contacts are :" + result);
//     }
// });

//Appnding data
//fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString());
//fs.appendFileSync("./test.txt",`${Date.now()} Hey there\n`)

//copy the data from one file to another file
//fs.cpSync("./test.txt","./copy.txt");

//delet he file and file data
//fs.unlinkSync("./copy.txt");

//console.log(fs.statSync("./test.txt").isFile());
fs.mkdirSync("my-docs/a/b",{recursive : true});