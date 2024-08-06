const fs = require("fs");
function fileUpdation(filePath){
    
    return ((req,res,next) =>{
        fs.appendFile(filePath , 
            `${Date.now()} : ${req.ip} ${req.method} ${req.path}`,
            (err,data) =>{
                next();
            }
        );
    });

};
module.exports = {
    fileUpdation
}