const http = require("http");
const url = require("url");

const myServer = http.createServer((req,res) =>{
    const parsedUrl = url.parse(req.url,true);
    const pathName = parsedUrl.pathname;
    switch(pathName){

        case '/' : res.end("This is home page!");
        break;
        case '/about' : res.end("This is about page!");
        break;
        case '/vasu' : res.end("This is vasu page !");
        break;
        default:
            res.end("Page Not Found");
    }

});

const PORT = 8002;
myServer.listen(PORT , () =>{
    console.log(`Your server runs in http://localhost:${PORT}/`);
})

