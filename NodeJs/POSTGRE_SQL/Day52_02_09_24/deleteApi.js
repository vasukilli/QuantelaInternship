const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

const {Client} = require("pg");
const client = new Client({
    host : "localhost",
    port : 5432,
    user : "postgres",
    password : "root",
    database : "NodeTestDb"
});

client.connect()
.then(() => console.log("Database connected successfully!"))
.catch((err) => console.log(err));

app.delete('/delete' , async (req,res) =>{

    const id = (req.body.id);
    if(!id) return res.status(404).json({"msg" : "id required!"});

    
    try{
    const query = 'delete from "Students" where id= $1';
    const values = [id];
        const result = client.query(query,values);
        return res.status(200).json({"msg" : "deleted successfully!"});
    }catch(err){
        return res.status(404).json({"msg" : "Database error!"});
    }
}); 

/*app.delete('/:id',async(req,res) =>{
    const id = parseInt(req.params.id);
    try{
        const query = 'delete from "Students" where id = $1';
        const values = [id];
        const result = client.query(query,values);
        return res.status(200).json({"msg" : "deleted successfully!"});

    }catch(err){
        return res.status(404).json({"msg" : "Database error!"});
    }
});
*/

const PORT = 8003;
app.listen(PORT,()=>{
    console.log(`your server runs at http://localhost:${PORT}/`);
});