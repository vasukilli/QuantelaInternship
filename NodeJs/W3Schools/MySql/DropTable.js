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
    //Creating a table
    const stmt1 = "create table employees (id int primary key , name varchar(50) , age int)";
    connection.query(stmt1 , (err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log("table created successfully!");
        }
    });
    //Drop table...
    const stmt2 = "drop table employees";
    connection.query(stmt2 , (err,result,fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log('deleted successful');
            console.log(result);
            console.log(fields);
        }
    })

})