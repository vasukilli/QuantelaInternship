// Create Schema and model for the database
const mongoose = require("mongoose");

//create schemaa
const urlSchema = new mongoose.Schema({
           shortId : {
            type : String,
            required : true,
            unique : true,
           },
           requestedURL : {
            type : String,
            required : true,
           },
           visitHistory : [{
            timestamp : {
                type : Number,
            },
           }],
},{timestamps : true});

//create model
const URL = mongoose.model('url1',urlSchema);

module.exports = URL;