const express = require("express");
const app = express();

app.use(express.json());

app.post('/data:id',(req,res) =>{
    const body = req.body;
    // res.status(200).json({
    //     message : "Data received!",
    //     data : body
    // });
    const id = req.params.id;
    res.send(`resource is : ${id}`); 

});
const PORT = 3006;
app.listen(PORT , () =>{
    console.log(`Your server runs in http://localhost:${PORT}/`);
});