const mysql = require("mysql2");
const con = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : "W7301@jqir#",
    database : "mydb"
});
con.connect((err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("Database connected!");
    }
    const stmt = "select * from customers where address like 'S%'";
    con.query(stmt , (err,result,fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            console.log(fields);
        }
    });
});