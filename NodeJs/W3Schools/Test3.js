const uc = require("upper-case");
const http = require("http");
const server = http.createServer(async (req,res) =>{
       res.writeHead(200 , {'content-type':'text/html'});
       res.write(uc.upperCase('hello world!'));
       res.end();
})
const PORT = 8000;
server.listen(PORT ,() =>{
    console.log(`your server runs at http://localhost:${PORT}/`);
});
