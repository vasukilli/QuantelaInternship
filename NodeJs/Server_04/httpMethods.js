const express = require("express"); //import express framework
const app = express();//create express web application

app.use(express.json())

app.get('/data/resource/:id' ,(req,res) =>{
    const id = req.params.id;
    res.status(200).json({
        message : `Data recevied from ${id}`,
    });

});
app.post('/data/resource',(req,res) =>{
        const body = req.body;
        res.status(200).json({
            message : 'Data added successfully!',
            data : body
        });

});


app.put('/data/resource/:id' , (req,res) =>{
       const body = req.body;
       const id = req.params.id;

       res.status(200).json({
        message : `Data updated successfully in ${id}`,
        data : body
       });
})

app.delete('/data/resource/:id',(req,res) =>{
    const id = req.params.id;
    res.status(200).json({
        message : `Data deleted of this id ${id}`
    });

});

const PORT = 8005;
app.listen(PORT , () =>{
    console.log(`Your server runs in http://localhost:${PORT}/`);
})

