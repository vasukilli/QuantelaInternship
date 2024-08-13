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
        console.log('Database connected!');
    }
    const sql = 'alter table customers add column id int Auto_increment primary key';
    connection.query(sql , (err,data) =>{
        if(err){
            console.log(err);
        }else{
            console.log("add new column successfully!");
        }
    });
});
