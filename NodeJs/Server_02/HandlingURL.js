const http = require("http"); //import http module
const url = require("url"); //import url module

const myServer = http.createServer((req,res) =>{
    // res.end("Hi vasudeva rao");
    const parsedUrl = url.parse(req.url,true);//object-->pathname,query
    const pathName = parsedUrl.pathname;// /greet
    const query = parsedUrl.query; // {name : "john"}
    //res.end("Your path name is " + pathName);

    if(pathName === '/greet'){
        const name = query.name || 'Guest';
        res.statusCode = 200;//ok
        res.end(`Hello , ${name}`);
    }else{
        res.statusCode = 404;
        res.end("Page Not Found!");
    }
    

});
const PORT = 8000;
myServer.listen(PORT , () =>{
    console.log(`Your server runs in http://localhost:${PORT}/`);
})
