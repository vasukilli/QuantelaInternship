const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url , (err,db) =>{
    if(err){
        console.log(err);
    }
    const odb = db.db("youtube-app-1");
    odb.collection("users").drop((err,dbStatus) =>{
        if(err){
            console.log(err);
        }else{
            if(dbStatus){
                console.log("Collection deleted !");
            }
        }
    });
});