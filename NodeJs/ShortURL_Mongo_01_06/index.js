const express = require("express");
const app = express();
const URL = require('./models/url');

//Mongodb connection

const {connectToMongoDB} = require('./connect');
connectToMongoDB("mongodb://localhost:27017/short-url")
.then(()=> console.log("MongoDb connected!"))
.catch((err) => console.log(err));

//middileware
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//Routing 
const urlRoute = require('./routes/url');
app.use('/url',urlRoute);


let entry;
app.get('/:shortid' ,async (req,res) =>{
     const shortId = req.params.shortid;
     entry =  await URL.findOneAndUpdate({
        shortId
     },{$push :{
        visitHistory : 
            {
            timestamp : Date.now(),
            },
        
     },
    }
);
     return res.redirect(entry.redirectURL);
});

const PORT = 8001;
app.listen(PORT , () =>{
    console.log(`Your server runs at http://localhost:${PORT}/`);
});