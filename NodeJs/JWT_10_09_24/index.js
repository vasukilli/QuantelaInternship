const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
const SECRET_KEY = "Vasudeva@123#$";

const users = [];
app.post('/register' , async(req,res) =>{
    const {username,password} = req.body;
    if(!username || !password) return res.status(404).json({"msg" : "All fields are required!"});
    const hashedPsw =await bcrypt.hash(password,10);
    users.push(username,{password :hashedPsw });
    res.status(200).json({"msg" : "Register successfully!" , "data" : users});
    
});

app.post('/login' , async (req,res) =>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(404).json({"msg" : "All fields are required!"});
    };
    const user = users.find((u) => u.username === username);
    if(!user) return res.status(401).json({"msg" : "data is not there!"});
    const isValidPsw = await bcrypt.compare(password,user.password); //true or false
    if(!isValidPsw){
        return res.status(404).json({"msg" : "Enter the correct credentials!"});
    }
    
    const token = jwt.sign({username : user.username} , SECRET_KEY);
    return res.status(200).json({"msg" :"Login successfully!" , "token" : token});

});
app.get('/checking',async (req,res) =>{
    const token = req.headers["authorization"];
    if(!token) return res.send("no token available!");
    jwt.verify(token,SECRET_KEY,(err,data)=>{
        if(err){
            return res.status(404).json({"msg" : err});
        }
        res.send(`The data is ${JSON.stringify(data)}`);
    });
})

const PORT = 8001;
app.listen(PORT , ()=>{
    console.log(`Your server runs at http://localhost:${PORT}/`);
})