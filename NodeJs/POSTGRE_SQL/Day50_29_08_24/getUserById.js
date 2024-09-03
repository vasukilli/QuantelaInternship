const express = require("express");
const app = express();
const {Client} = require("pg");

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

const client = new Client({
    host : 'localhost',
    port : 5432,
    user : 'postgres',
    password : 'root',
    database : 'NodeTestDb'
});

client.connect()
.then(() => console.log('Database connected successfully!'))
.catch((err) => console.log(err));

app.post('/data' , async (req,res) =>{
    const body =  req.body;
    if(!body){
        return res.status(404).json({"msg":"Data required!"});
    }else{
        return res.status(200).json(res.rows);
    }


})
const PORT = 8004;
app.listen(PORT , () =>{
    console.log(`your server runs at http://localhost:${PORT}/`);
})
