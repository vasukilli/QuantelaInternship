const express = require("express");
const {restrictTo} = require('../middilewares/auth');
const URL = require('../models/url');
const router = express.Router();

router.get('/admin/urls',restrictTo(["ADMIN"]),async (req,res) =>{
    // if(!req.user) return res.redirect('/login');
    const allUrls = await URL.find({});
    return res.render("home",{
        urls : allUrls,
    });
});
router.get('/',restrictTo(["NORMAL","ADMIN"]),async (req,res) =>{
    // if(!req.user) return res.redirect('/login');
    const allUrls = await URL.find({createdBy : req.user._id});
    return res.render("home",{
        urls : allUrls,
    });
});

router.get('/signup',(req,res) =>{
    return res.render("Signup");
});

router.get('/login',(req,res) =>{
    return res.render("login");
});

module.exports = router;