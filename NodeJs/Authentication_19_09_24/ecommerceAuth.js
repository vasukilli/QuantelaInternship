const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

//Middlewares ...
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));

const users = [];
const products = [];
const orders = [];
const SECRET_KEY = 'Ecommerce@123';

app.post('/register' , async (req,res) =>{
    const {username,password,role} = req.body;
    if(!username || !password || !role) return res.status(404).json({"msg":"All fields are required!"});
    const hashPaswd = await bcrypt.hash(password,10);
    users.push({
        username : username,
        password : hashPaswd,
        role : role
    });
    return res.status(200).json({"msg":"Register successfully!"});
});

app.post('/login', async (req,res) =>{
    const {username,password} = req.body;
    if(!username || !password) return res.status(404).json({"msg":"All fields are required!"});
    const user = users.find((u) => u.username === username);
    if(!user) return res.status(404).json({"msg" : "User not-Found!"});
    const isValidPas = await bcrypt.compare(password,user.password);
    if(!isValidPas) return res.status(403).json({"msg" : "Invalid password!"});
    const token = jwt.sign({username : user.username , role : user.role},SECRET_KEY,{expiresIn : '1h'});
    res.json({token});
});

function authentication(roles = []){
       return async (req,res,next) =>{
        const token = req.headers['authorization']?.split(' ')[1];
        
        if(!token) return res.status(401).json({"msg" : "Token is not presented!"});
        jwt.verify(token,SECRET_KEY,(err,data) =>{
            if(err) return res.status(403).json({"err":err});
            if(!roles.includes(data.role)) return res.status(403).json({"msg":"no permission is there!"});
            req.user = data;
            next();
        });
       }
};
app.post('/customer/orders',authentication(["customer"]),(req,res)=>{
    if(!req.body.items){
        return res.status(404).json({"msg":"items are required for placed an order!"});
    }
    const order = {customer : req.user.username , items : req.body.items};
    orders.push(order);
    return res.status(201).json({"msg":"order placed successfully!",order});

});
app.post('/seller/products',authentication(["seller"]),(req,res)=>{
    const product = {sellerName : req.user.username ,  ...req.body};
    products.push(product);
    return res.status(201).json({"msg":"Product added successfully!",product});

});
app.get('/admin/orders',authentication(["admin"]),(req,res)=>{
     return res.json({orders});
});
app.get('/admin/products',authentication(["admin"]),(req,res)=>{
    return res.json({products});
});
app.get('/admin/users',authentication(["admin"]),(req,res)=>{
    return res.json({users});
});

const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`your server runs at http://localhost:${PORT}/`);
});