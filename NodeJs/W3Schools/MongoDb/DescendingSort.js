const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url , (err,db) =>{
    if(err){
        console.log(err);
    }
    const odb = db.db("youtube-app-1");
    const query = {name : -1}; //Descending sorting order
    odb.collection("users").find().sort(query).toArray((err,res) =>{
        if(err){
            console.log(err);
        }
        console.log(res);
    });
});