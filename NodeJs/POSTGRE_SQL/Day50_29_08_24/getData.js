const {Client} = require('pg');
const client = new Client({
    user : 'postgres',
    password : 'root',
    host : 'localhost',
    port : 5432,
    database : 'NodeTestDb'
});
client.connect()
.then(() => console.log('Database connected successfully!'))
.catch((err) => console.log(err));

client.query('select * from "Employee" order by id asc',(err,res) =>{
    if(err){
        console.log(err);
    }else{
        console.log(res.rows);
    }
});
