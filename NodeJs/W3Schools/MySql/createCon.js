const mySql = require("mysql2");
const con = mySql.createConnection({
    host : "localhost",
    user : "root",
    password : "W7301@jqir#",
    database : "vasudb"
});
con.connect((err,data) =>{
    if(err){
        console.log(err);
    }else{
        console.log('connected!');
    }
});