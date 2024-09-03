const express = require("express");
const app = express();
const {Client} = require('pg');
// const bodyParser=require('body-parser')

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extends:true}));
const client = new Client({
    host : "localhost",
    port : 5432,
    user : "postgres",
    password : "root",
    database : "NodeTestDb"
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

app.get('/data' , async (req,res) =>{
    const result = await client.query('select * from "Employee"') 
        if(result.rows.length === 0){
              res.status(404).json({"msg" :"no data available"});
        }else{
             res.status(200).json(result.rows);
             //res.send(result.rows);
        }
}); 
    


const PORT = 8000;
app.listen(PORT , ()=>{
    console.log(`your server runs at http://localhost:${PORT}/`);
});