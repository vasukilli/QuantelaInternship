const mongoose = require("mongoose");

//create Schema
const animalSchema = new mongoose.Schema({
    animalName : {
        type : String,
        required : true,
    },
    animaSpecNam : {
        type : String,
        required : true,
    },
    plantFam : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    country : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        required : true,
    },

},{timestamps : true});

//create Model.
const Animal = mongoose.model("Animi",animalSchema);

module.exports = Animal;