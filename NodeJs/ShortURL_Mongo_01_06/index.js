const express = require("express");
const app = express();
const URL = require('./models/url');
const path = require("path");
const staticRouter = require("./routes/staticRouter");

//frontend(server side)
app.set("view engine","ejs");
app.set("views",path.resolve('./views'));
//Mongodb connection

const {connectToMongoDB} = require('./connect');
connectToMongoDB("mongodb://localhost:27017/short-url")
.then(()=> console.log("MongoDb connected!"))
.catch((err) => console.log(err));

//middileware
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//frontend 
// app.get('/test' , async(req,res) =>{
//      const allUrls = await URL.find({});
//      return res.render('home',{
//         urls : allUrls,
//      });
// });



//Routing 
const urlRoute = require('./routes/url');
app.use('/url',urlRoute);
app.use('/',staticRouter);


let entry;
app.get('/tst/:shortid' ,async (req,res) =>{
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