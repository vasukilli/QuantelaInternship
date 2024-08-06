const express = require("express");
const app = express();

//create mongodb connection

const {createDbCon} = require('./connection.js');
createDbCon("mongodb://127.0.0.1:27017/Humans")
.then(() => console.log("MongoDb connected successfully!"))
.catch((err) => console.log(err));

//Middile ware

const {fileUpdation} = require('./middileware/person.js');
app.use(fileUpdation('log.txt'));
app.use(express.urlencoded({extended : false}));

//routes
const personDb = require('./routes/persondb.js');
app.use('/api/person',personDb);
const PORT = 8008;
app.listen(PORT , 
    () =>{
        console.log(`your server runs at http://localhost:${PORT}/`);
    }
);