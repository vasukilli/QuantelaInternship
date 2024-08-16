const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url , (err,db) =>{
    if(err) throw err;
    const ado = db.db("admin");
    const objData = {name : "vasudevarao killi" , address : "sklm"};
    ado.collection("students").insertOne(objData , (err,res) =>{
        if(err){
            console.log(err);
        }else{
            console.log("1 record inserted!");
        }
    });
});