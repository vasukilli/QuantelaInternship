const User = require('../models/user');
const {setUser} = require('../service/auth');
const {v4 : uuidv4} = require("uuid");

const userSignup = async (req,res) =>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        //return res.status(404).json({"msg":"All fields are required"});
        return res.send("All fields are required");
    }
    const result = await User.create({
        name,
        email,
        password
        
    });
    return res.redirect('/');

}
const userLogin = async (req,res) =>{
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(!user){
        return res.render("login",{
            "msg" : "Invalid email and password!"
        })
    }
    const sessionId = uuidv4();
    setUser(sessionId,user);
    res.cookie("uid",sessionId);
    return res.redirect('/');

}
module.exports = {
    userSignup,
    userLogin
}