const http = require("http");
const fs = require("fs");
const myServer = http.createServer(async (req,res) =>{
       fs.readFile('./doc.html',(err,data) =>{
          if(err){
            console.log(err);
          }else{
            res.writeHead(200 , {'content-type' : 'text/html'});
            res.write(data);
            return  res.end();
          }
       });
       
});
const PORT = 8000;
myServer.listen(PORT , ()=>{
    console.log(`your server runs at http://localhost:${PORT}/`);
})