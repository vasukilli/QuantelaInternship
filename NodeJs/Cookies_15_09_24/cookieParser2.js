const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

//MiddleWares...
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));

//post the data ...
app.post('/postData' , async (req,res) =>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(404).json({"msg" : "All fields are required!"});
    }
    try{
         await res.cookie({'username':username,'password':password},{
            maxAge : 5000000,
            httpOnly : true
          });
          
          return res.status(200).json({"msg" : "cookie created successfully!"});
    }catch(err){
        return res.status(400).json({"error" : err});
    }

});

//get the cookie details ...
app.get('/getData' , async(req,res) =>{
    const cookie = await req.cookies;
    if(!cookie){
        //res.send("Cookie is not there!");
        return res.status(404).json({"msg" : "cookie is not there!"});
    }
    res.send(`${JSON.stringify(cookie)}`);
});
//delete the cooke from server ...
app.get('/deleteData',async (req,res) =>{
    res.clearCookie('username');
    res.send("cookie deleted successfully!");
})

const PORT = 8005;
app.listen(PORT , ()=>{
    console.log(`your server runs at http://localhost:${PORT}/`);
})