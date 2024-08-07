//mongodb schema and model 
const mongoose = require("mongoose");

//Schema 
const urlSchema = new mongoose.Schema({
    shortId : {
        type : String,
        required : true,
        unique : true,
    },
    redirectUrl : {
        type : String,
        required : true,
    },
    visitHistory : [{
        timestamp : {
            type : Number,
        }
    }],

    

},{timestamps : true});

// CREATE MODEL 
const URL = mongoose.model('url2',urlSchema);

module.exports = URL;
