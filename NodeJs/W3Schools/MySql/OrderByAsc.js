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
    //Ascending order...
    const stmt1 = "select * from customers order by address";
    connection.query(stmt1,(err,result,fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    });

    //Descending order...
    const stmt2 = "select * from customers order by address desc";
    connection.query(stmt2,(err,result,fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            console.log(fields);
        }
    });
});