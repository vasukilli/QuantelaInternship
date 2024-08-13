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
    const sql = "insert into customers (name,address) VALUES ('vasu','sklm'),('kalyani','hyd'),('triveni','blg')";
    connection.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log("Data inserted successfully!");
            console.log(result.insertId);
        }
    });
});