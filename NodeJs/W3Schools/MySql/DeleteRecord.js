const mysql = require("mysql2");
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "W7301@jqir#",
    database : "mydb"
});

connection.connect((err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("database connected!");
    }
    const stmt = "delete from customers where address = 'blg'";
    connection.query(stmt , (err,result,fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log("The affcted rows :" + result.affectedRows);//2
            console.log(result);
        }
        
    });
});