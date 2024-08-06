const mongoose = require("mongoose");
function createDbCon(url){
    return mongoose.connect(url);
}
module.exports = {
    createDbCon
}