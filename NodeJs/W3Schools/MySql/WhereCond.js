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
    const stmt = "select * from customers where address = 'Park Lane 38'";
    connection.query(stmt , (err,result,fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            console.log(fields);
        }
    });

});