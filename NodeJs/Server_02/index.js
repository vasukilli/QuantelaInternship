// const http = require("http"); //module import
// const myServer = http.createServer((req,res) =>{
//     //res.statuscode = 200;
//     console.log("req success");
//     res.end("Hello world \n"); //response and request

// });
// const PORT = 3000;
// myServer.listen(PORT , () =>{
//     console.log(`Your server run in http://localhost:${PORT}/`);
// });

const http1 = require("http");
const fs = require("fs");

const myServer1 = http1.createServer((req,res) =>{
    fs.appendFile("./reqData.txt", req.url , (data,err) =>{
           if(err){
            console.log(err);
           }else{
            console.log("Data added!");
           }
    });

    if(req.url === '/'){
        res.statusCode = 200;
        res.end("This is my home page");

    }else if(req.url === '/about'){
        res.statusCode = 200;
        res.end("This is my about page!");

    }else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }

});
const PORT = 8000;
myServer1.listen(PORT ,() =>{
    console.log(`Your server runs in http://localhost:${PORT}/`);
});