const express = require("express");
const jwtToken = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcryptJs = require("bcryptjs");
const cookieParser = require("cookie-parser");
const app = express();

//Middilewares ...

app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

const secret_key = "Vasu@12345";
const users = [];

app.post('/register',async (req,res) =>{
    const {username,password} = req.body;
    if(!username || !password) return res.status(404).json({"msg" : "all fields are required!"});
    try{
        const hashPsw = await bcryptJs.hash(password,10);// xyzabc
        users.push({username : username,password : hashPsw});
        return res.status(200).json({"msg" : "Register successfully",
            "data" : users
        });

    }catch(err){
      return res.status(500).json({"Error":err});
    }
});
app.post('/login',async(req,res) =>{
        const {username,password} = req.body;
        if(!username || !password) return res.status(404).json({"msg" : "all fields are required!"});
        const user = users.find((u) => u.username ===username);
        if(!user) return res.status(404).json({"msg" : "data is not there!"});
        isvalidPsw = await bcryptJs.compare(password,user.password);
        if(isvalidPsw){
            const jwt = jwtToken.sign({'username' : username},secret_key,{expires : 5000000});
            res.cookie("sessionId",jwt);
            return res.status(200).json({"msg":"sessionId created successfully!"});
        }
    return res.status(404).json({"msg" : "sessionId not generated!"});
});

app.get('/checking', async (req,res) =>{
      const token = req.headers["authorization"]?.split(" ")[1];
      if(!token) return res.send("Token is not there!");
      jwtToken.verify(token,secret_key,(err,data) =>{
        if(err){
            return res.status(401).json({"msg" : err});
        }
        res.send(`your data is ${JSON.stringify(data)}`);
      })
});

const PORT = 8000;
app.listen(PORT , ()=>{
    console.log(`your server runs at http://localhost:${PORT}/`);
});