const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
MongoClient.connect(url , (err,db) =>{
    if(err){
        console.log(err);
    }
    const odb = db.db("youtube-app-1");
    odb.dropCollection("users",(err,status) =>{
        if(err) throw err;
        if(status){
            console.log("collection deleted!");
        }
    });
});