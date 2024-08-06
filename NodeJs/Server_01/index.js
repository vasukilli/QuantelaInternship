// const http = require("http");//create http object
// const myServer = http.createServer((req,res) =>{
//     //console.log(req);
//     console.log("request success");
//     res.end("Hello from server again!...");

// }); //create server
// myServer.listen(8000, ()=>{
//     console.log("server started");
// })

//file handling with http server
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res) =>{
    // const log = `${Date.now()} : new req added\n`;
    const log = `${Date.now()} : ${req.url} new req added\n`;
    fs.appendFile("./log.txt" , log , (err,data)=>{
        //res.end("Another data added successfully!");
        switch(req.url){
            case '/' : res.end("HomePage");
            break;
            case '/about' : res.end("Vasudeva rao webpage");
            break;
            default :
            res.end("404 Not Found");
        }
    });

});
myServer.listen(8005,() =>{
    console.log("server started!");
});
