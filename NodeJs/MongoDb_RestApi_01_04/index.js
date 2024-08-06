const express = require("express");
const app = express();

//connection
const {connectionMongoDb} = require('./connection');
connectionMongoDb("mongodb://127.0.0.1:27017/AnimalsDb")
.then(() => console.log("MonogoDb connected!"))
.catch((err) => console.log(err));


//middleWare
app.use(express.urlencoded({extended : false}));
const {logReqRes} = require("./middilewares");
app.use(logReqRes('log.txt'));


//routes
const animalRouter = require('./routes/animal');
app.use('/api/animal',animalRouter);


const PORT = 8004;
app.listen(PORT , () =>{
    console.log(`Your servers runs in http://localhost:${PORT}/`);
});