const fs = require("fs");
const url = require("url");
const http = require("http");
const myServer = http.createServer(async(req,res) =>{
    const parseUrl = url.parse(req.url,true);// /Summer or /Winter
    const pathName = parseUrl.pathname; // /Summer or /Winter
    const fileName = './' + pathName;
    fs.readFile(fileName, (err,data) =>{
        if(err){
            res.writeHead(404,{'content-type' : "text/html"});
            return res.end('404 not found!')
        }else{
            res.writeHead(200,{'content-type' : 'text/html'});
            res.write(data);
            return res.end();
        }
    });
});
const PORT = 8000;
myServer.listen(PORT , () =>{
    console.log(`Your server runs at http://localhost:${PORT}/`);
})
