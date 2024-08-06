const http = require("http");
const url = require("url");
const fs = require("fs");

const myServer = http.createServer((req,res) =>{
    const parsedUrl = url.parse(req.url,true);
    const pathName = parsedUrl.pathname;
    const query = parsedUrl.query;
    fs.writeFile("links.txt",parsedUrl,(err,data) =>{
        if(err){
            console.log(err);
        }else{
            console.log("Data written successfully!");
        }
    });
    

    switch(pathName){
        case '/greet' : res.end(`Hello ${query.name}`);
        break;
        case '/farewell' : res.end(`Good bye ${query.name}`);
        break;
        default:
            res.end("Page Not Found !...");
    }


});

const PORT = 3000;
myServer.listen(PORT , () =>{
      console.log(`Your code run in this http://localhost:${PORT}/`);
})