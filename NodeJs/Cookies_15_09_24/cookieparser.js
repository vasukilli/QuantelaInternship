const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

// we can use cookie to send data to the server
app.get('/setCookie' , async(req,res) =>{
    await res.cookie('username','vasudeva rao killi',{
        maxAge : 9000000,
        httpOnly : true,
    });
    res.send("cookie send successfully!");
});

//we can access the cookie from the server ..
app.get('/getCookie',async(req,res) =>{
    const cookie = await req.cookies; //object.
    res.send(`${JSON.stringify(cookie)}`);//convert json
});

//we can delete cookie by using key 
app.get('/deleteCookie' , async(req,res) =>{
    await res.clearCookie('username');
    res.send("cookie deleted successfully!");
});

const PORT = 8000;
app.listen(PORT , () =>{
    console.log(`Your server runs at http://localhost:${PORT}/`);
})