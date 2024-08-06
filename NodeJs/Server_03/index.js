//Get , put , post , delete by using express framework
const express = require("express");
const app = express(); // this handle get,put,post,update delete , patch

app.get('/',(req,res) =>{
        res.end("THis is homepage!");
});

app.get('/about' , (req,res) =>{
    res.end("this is about page!");
});

app.get('/vasu' , (req,res) =>{
    res.end("This is vasu page!");
});

const PORT = 3000;
app.listen(PORT , () =>{
    console.log(`Your server runs in http://localhost:${PORT}/`);
})
