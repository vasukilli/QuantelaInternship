const express = require("express");
const app = express();
const bodyParser = require('body-parser');

//middile wares
app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));

//Postgre sql ...
const {Client} = require("pg");
const client = new Client({
    host : "localhost",
    port : 5432,
    user : "postgres",
    password : "root",
    database : "NodeTestDb"
});

client.connect()
.then(()=>console.log("Database connected!"))
.catch((err) => console.log(err));

app.put('/insert',async (req,res) =>{
    const {id,fullName,age,marks} = req.body;

    if(!id || !fullName || !age || !marks){
        return res.status(404).json({"msg" : "All fields are required!"});
    }
    try{
        const query = 'update "Students" set "fullName" = $2,age = $3,marks = $4 where id = $1';
        const values = [id,fullName,age,marks];

        const result = client.query(query,values);
        return res.status(200).json({"msg" : "updated successfully!"});
        //return res.send(result.rows[0]);
        

    }catch(err){
        return res.status(404).json({"msg":"Database error!"});
    }

});
app.get('/data' , async (req,res) =>{
    try{
        const query = 'select * from "Students" order by id Asc';
        const result = await client.query(query);
        if(!result){
            return res.status(404).json({"msg" : "no data available!"});
        }else{
            return res.status(200).json({"data" : result.rows});
        }

    }catch(err){
        return res.status(404).json({"msg" : "Database error!"});
    }
});


const PORT = 8004;
app.listen(PORT,()=>{
    console.log(`Your server runs at http://localhost:${PORT}/`);
})