//MongoClient
const mongoClient = require("mongodb").MongoClient;
const url = 'mongodb://localhost:27017/mydb';
mongoClient.connect(url , (err,db) =>{
    if(err){
        console.log(err);
    }else{
        console.log("Database created!");
    }
    //db.close();
});