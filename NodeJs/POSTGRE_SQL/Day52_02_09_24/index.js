const express = require("express");
const app = express();

//Middileware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));

//Postgres connection
const {Client} = require('pg');
const client = new Client({
    host : 'localhost',
    port : 5432,
    user : 'postgres',
    password : 'root',
    database : 'NodeTestDb'
});

client.connect()
.then(() => console.log('Database connected!'))
.catch((err) => console.log(err));

//inserting new data into the table
app.post('/data' , async(req,res) =>{
    const {id,fullName,age,marks} = req.body;

    if(!id || !fullName || !age || !marks){
        res.status(404).json({"msg":"All fields are required!"});
    };

        const query = 'INSERT INTO "Students" (id,"fullName",age,marks) values ($1,$2,$3,$4)';
        const values = [id,fullName,age,marks];

        const result = await client.query(query,values);
        return res.status(200).json({"msg" : 'data added successfully!',
             "data" : result.rows[0]
        
        });

   

});
app.get('/',async(req,res) =>{
    try{
    const query = 'SELECT * FROM "Students"';
    const result = await client.query(query);

    return res.status(200).json({"data" : result.rows[7]});
    }catch(err){
        return res.status(404).json({"msg" : "Database error!"});
    }

})

//localhost listen
const PORT = 8000;
app.listen(PORT , () =>{
    console.log(`your server runs at http://localhost:${PORT}/`);
});