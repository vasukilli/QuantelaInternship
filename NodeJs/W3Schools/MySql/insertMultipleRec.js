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
        console.log("Database connected successfully!");
    }
    const sql = 'insert into customers (name,address) values ?';
    const values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];

    connection.query(sql,[values] , (err,result) =>{
        if(err){
            console.log(err);
        }else{
           // console.log("Reseleted rows are " + result.affectedRows); //14
           console.log(result);
        }
    })

});