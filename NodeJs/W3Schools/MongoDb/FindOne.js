const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url , (err,db) =>{
    if(err){
        console.log(err);
        return;
    }
    const odb = db.db('youtube-app-1');
    odb.collection("users").findOne({} , (err,res) =>{
        if(err){
            console.log(err);
        }else{
            console.log(res);
        }
    });
});