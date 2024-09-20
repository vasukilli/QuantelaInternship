const express = require("express");
const app = express();
const URL = require('./models/url');



//frontend(server side)
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.resolve('./views'));

//Mongodb connection
const {connectToMongoDB} = require('./connect');
connectToMongoDB("mongodb://localhost:27017/short-url")
.then(()=> console.log("MongoDb connected!"))
.catch((err) => console.log(err));

//middileware
const cookieParser = require('cookie-parser');
const {checkForAuthentication,restrictTo} = require('./middilewares/auth');

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthentication);

//frontend 
// app.get('/test' , async(req,res) =>{
//      const allUrls = await URL.find({});
//      return res.render('home',{
//         urls : allUrls,
//      });
// });



//Routing 
const urlRoute = require('./routes/url');
const staticRouter = require("./routes/staticRouter");
const userRoute = require('./routes/user');
app.use('/url',restrictTo(["NORMAL","ADMIN"]),urlRoute); // [/] post and [/analytics/:shortId] --> get data purpose
app.use('/user',userRoute); // [/user/signup] and [/user/login] ---> post user data
app.use('/',staticRouter); //login,signup


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