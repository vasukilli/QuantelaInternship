const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url , (err,db) =>{
    if(err){
        console.log(err);
    }
    const odb = db.db("youtube-app-1");
    const mySort = {name : 1};//Ascending sorting
    odb.collection("users").find().sort(mySort).toArray((err,res) =>{
          if(err){
            console.log(err);
          }else{
            console.log(res);
          }
    });
});