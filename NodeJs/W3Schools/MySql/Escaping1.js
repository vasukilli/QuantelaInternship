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
    const nam = "vasu";
    const stmt = "select * from customers where name = " +`${mysql.escape(nam)}`;
    connection.query(stmt , (err,result,fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    }); 

    const n1 = "vasudevarao killi";
    const ad1 = "sklm";
    const stmt2 = "select * from customers where name = "+ `${mysql.escape(n1)}` + "or" + " address = " + `${mysql.escape(ad1)}`;
    connection.query(stmt2 , (err,result,fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    }); 

    const n2 = "kalyani";
    const add2 = "sklm";
    const stmt3 = "select * from customers where name = ? or address = ?";
    connection.query(stmt3,[n2,add2] , (err,result,fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    });
});