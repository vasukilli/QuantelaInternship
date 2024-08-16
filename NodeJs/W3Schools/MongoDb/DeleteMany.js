const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
MongoClient.connect(url , (err,db) =>{
    if(err){
        console.log(err);
    }
    const odb = db.db('youtube-app-1');
    const myQuery = {address : /^O/};
    odb.collection("users").deleteMany(myQuery , (err,res) =>{
       if(err){
        console.log(err);
       }else{
        console.log("deleted successfully");
       }
    })
})