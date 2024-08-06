const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");

let users = require("./MOCK_DATA.json");

//Schema


//MiddleWare
app.use(express.urlencoded({extended : false}));

app.get('/users',(req,res) =>{
    return res.json(users);
});

app.get('/api/users/:id',(req,res)  =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.get('/api/users',(req,res) =>{
    const html = `<ol>${users.map((user) => `<li>${user.phone}</li>`).join("")}</ol>`;
    return res.send(html);
});

app.post('/api/users/data' , (req,res) =>{
     const body = req.body;
     users.push({id : users.length + 1 , ...body});
     fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (err,data) =>{
        return res.json({id : users.length , Status : 'New Data added!'});
     });
});

app.put('/api/users/:id' , (req,res) =>{
    const id = Number(req.params.id);
    const body = req.body;

    const idx = users.findIndex((user) => user.id === id);//5,-1

    if(idx !== -1){
        users[idx] = {id : id , ...body};
        fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data) =>{
            return res.json({id:id , status : 'Data updated!'});
        });

    }else{
        return res.json({ status : 'Data not presented!'});
    }
});

app.delete('/api/users/:id' , (req,res) =>{
    const id = Number(req.params.id);
    const idx = users.findIndex((user) => user.id === id);//3,-1

    if(idx !== -1){
        users = users.filter((user) =>user.id !== id); //obj
        fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (err,data) =>{
            return res.json({id : id , status : 'Data deleted successfully!'});
        });

    }else{
        return res.json({
            status : 'Data Not Found'
        });
    }
})

const PORT = 8008;
app.listen(PORT , () =>{
    console.log(`Your server runs in http://localhost:${PORT}/`);
});

