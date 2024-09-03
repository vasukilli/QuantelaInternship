const {Client} = require('pg');
const client = new Client({
    host : "localhost",
    user : 'postgres',//postgres
    port : 5432,
    password : 'root',
    database : 'NodeTestDb'

});
client.connect()
.then(() => console.log('Database connected successfully!'))
.catch((err) => console.log(err));

client.query('Select * from "Employee"' , (err,res)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log(res.rows);
    }
    client.end();
})