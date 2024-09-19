const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
//Middlewares...
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

const SECRET_KEY = "Vasu@123321";
const users = [];
app.post('/register' , async(req,res) =>{
    const {username,password,role} = req.body;
    if(!username || !password || !role) return res.status(404).json({"msg" : "All fields are required!"});
    const hashPaswd = await bcrypt.hash(password,10);
    users.push({
        username : username,
        password : hashPaswd,
        role : role
    });
   
    return res.status(200).json({"msg" : "Register successfully!"});
    //res.send(users);
});
app.post('/login' , async(req,res) =>{
    const {username,password} = req.body;
    if(!username || !password) return res.status(404).json({"msg":"All fields are required!"});
    const user = users.find((u) => u.username === username);
    //console.log(user);
    if(!user) return res.status(404).json({"msg":"user not found!"});
    isValidPas = await bcrypt.compare(password ,user.password);

    if(!isValidPas) return res.status(403).json({"msg":"Invalid password!"});
    const token = jwt.sign({username : user.username,role : user.role},SECRET_KEY);
    res.json({token});
    //res.cookie("token",token);

});

//Authentication ...
function authentication(users = []){
    return (req,res,next) =>{
        //const token = await req.headers['authorization']?.split(' ')[1];
        //console.log(token);
        const authHeader = req.headers["authorization"];
        if(!authHeader) return res.status(401).json({"msg":"no token provided!"});
        const token = authHeader.split(' ')[1];
        if(!token) return res.status(401).json({"msg":"no token available"});
        jwt.verify(token,SECRET_KEY,(err,data)=>{
            if(err) return res.status(403).json({"err" : "Invalid token"});
            if(users.length !== 0 && !users.includes(data.role)){
                return res.status(403).json({"msg" : "Access wrong!"})
            }
            req.user = data;
            next();
        });
        
           
    };
    
}
app.get('/admin',authentication(['admin']),(req,res)=>{
    return res.send('Welcome to admin page!');
});
app.get('/dashboard',authentication(),(req,res)=>{
    return res.send(`welcome to dashboard page! the data is ${req.user.username} and ${req.user.role}`);
});


const PORT= 8000;
app.listen(PORT , ()=>{
    console.log(`Your server runs at http://localhost:${PORT}/`);
});