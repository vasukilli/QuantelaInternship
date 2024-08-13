const mysql = require("mysql2");
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "W7301@jqir#"
});

connection.connect((err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('Connected!');
    }
    connection.query('create database myDb' , (err,data) =>{
        if(err){
            console.log(err);
        }else{
            console.log("Database created succcessfully!");
        }
    })
})