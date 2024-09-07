const express = require("express");
const bodyParser = require("body-parser");
const URL = require('./models/url');
const app = express();

//Middlewares...
const cookieParser = require("cookie-parser");
const {restrictToLoggedinUserOnly,checkAuth} = require('./middilewares/auth');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

//MongoDb connection ...
const {connectMongoDb} = require('./connection');
connectMongoDb('mongodb://localhost:27017/ShortUrlDb')
.then(() => console.log("MongoDB Connected successfully!"))
.catch((err) => console.log(err));

//frontend...
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.resolve('./views'));

//Routing handling...
const apiRouter = require('./routes/url');
const staticRouter = require('./routes/staticRouter');
const userRouter = require('./routes/user');
app.use('/url',restrictToLoggedinUserOnly,apiRouter);//  /url/ , /url/analytics/:id 
app.use('/user',userRouter);
app.use('/',checkAuth,staticRouter); // /login , /signup , /(home)

//Redirect to url ...
app.get('/api/:shortid' , async (req,res) =>{
         const shortID = req.params.shortid; //h8CaZgie5
         if(!shortID){
            return res.status(404).json({msg : "shortid is not there!"})
         }
         const result = await URL.findOneAndUpdate({shortId : shortID},{$push :{visitHistory : {timestamp : Date.now()}}});
         return res.redirect(result.redirectUrl);
});

const PORT = 8000;
app.listen(PORT , () =>{
    console.log(`Your server runs at http://localhost:${PORT}`);
});