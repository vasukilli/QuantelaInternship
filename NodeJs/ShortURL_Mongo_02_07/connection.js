const mongoose = require("mongoose");

async function handleMongoCon(url){
    return await mongoose.connect(url);
}

module.exports = {handleMongoCon};