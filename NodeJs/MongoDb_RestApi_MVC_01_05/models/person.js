const mongoose = require("mongoose");

//Schema creation
const allPersonSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
    },
    Age : {
        type : Number,
        required : true,
    },
    Gender : {
        type : String,
        required : true,
    },
    Phone : {
        type : BigInt,
        required : true,
    },
},{timestamps:true});

//create model 

const Person = mongoose.model('person',allPersonSchema);

module.exports ={
    Person
}