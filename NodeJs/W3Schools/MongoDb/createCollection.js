const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/"
MongoClient.connect(url,(err,db) =>{
     if(err){
        console.log(err);
     }
     const dbo = db.db("mydb");//mydb
     dbo.createCollection('customers',(err,res) =>{
        if(err){
            console.log(err);
        }
        console.log("Collection cleated!");
        db.close();
     })
     
});