const mongoose = require("mongoose");

async function createMongoDbCon(url){
      return await mongoose.connect(url);
}
module.exports = {createMongoDbCon};