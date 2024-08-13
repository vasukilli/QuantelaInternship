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
        console.log('connected succcessfully!');
    }
    const sql = 'create table customers (name varchar(255) , address varchar(255))';
    connection.query(sql,(err,data) =>{
        if(err){
            console.log(err);
        }else{
            console.log('Table created succcessfully!');
        }
    });
});
