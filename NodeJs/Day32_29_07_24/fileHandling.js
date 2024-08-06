// Reading files
//Asynchronously 
const fs = require("fs"); //File System module

fs.readFile("example.txt","utf8",(err,data) =>{ //async
     if(err){
        console.log(err);
     }else{
        console.log(data);
     }
});

//Synchronous calling 

try{
    const result = fs.readFileSync("example.txt","utf8");
    console.log(result);
}
catch(err){
   console.log(err);
}

//writing data into the file
Asynchronously 
const data = "This company presented in Hyderabad \n";
fs.writeFile("./example.txt" , data , (err,res) =>{
   if(err){
      console.log(err);
   }else{
      console.log("Data added successfully!");
   }
});

const data1 = "THis is the best company for freshers for building their skills \n";

try{
     fs.writeFileSync("./example.txt" ,data1);
    console.log("synch data added successfully");
}catch(err){
   console.log(err);
}

//appenddata to a file Asynchronously
var content = " new data added! to the file"
fs.appendFile("./example.txt" , content , (err)=>{
   if(err){
      console.log(err);
   }else{
      console.log("async Data added successfully!");
   }
});

var content1 = "new data added by synchronously!";
 try{
     fs.appendFileSync("./example.txt",content1);
     console.log("sync data added")
 }catch(err){
   console.log(err)
 }

//copy the file data ..Async
fs.cp("./example.txt","./copy.txt",(err,data) =>{
   if(err){
      console.log(err);
   }else{
      console.log("copy the file successfully!");
   }
});
sync
try{
   fs.cpSync("./copy.txt","./example.txt");
   console.log("copy success");

}catch(err){
   console.log(err);
}

fs.unlink("./copy.txt",(err,data) =>{
   if(err){
      console.log(err);
   }else{
      console.log("Deleted successfully!");
   }
});

try{
   fs.unlinkSync("./Contacts.txt");
   console.log("file deleted successflly!");

}catch(err){
   console.log(err);
}

//Rename the file Asynchronously!
fs.rename("./example.txt","./newFile.txt" , (err,data) =>{
   if(err){
      console.log(err);
   }else{
      console.log("filename updated successfully!");
   }
});

try{
   fs.renameSync("./newFile.txt","./example.txt");
   console.log("file name changed successfully");
}catch(err){
   console.log(err);
}