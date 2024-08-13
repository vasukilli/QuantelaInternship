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
        console.log("Database connected!");
    }
    // First 5 recordss....
    const stmt1 = "select * from customers limit 5";
    connection.query(stmt1,(err,result,fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    });

    const stmt2 = "select * from customers limit 5 offset 3";
    connection.query(stmt2 , (err,result,fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    });

    const stmt3 = "select * from customers limit 5,6";
    connection.query(stmt3,(err,result,fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    });
});