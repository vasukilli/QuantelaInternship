const mysql = require("mysql2");
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "W7301@jqir#",
    database : "vasudb"
});
connection.connect((err) =>{
    if(err){
         console.log(err);
    }else{
        console.log("Database connected succcessfully!");
    }
})