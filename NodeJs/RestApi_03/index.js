const express = require("express");
let users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

//add this middleware - plugin
app.use(express.urlencoded({extended : false}));



app.get("/api/users" ,(req,res) =>{
    return res.json(users);
});

app.get("/users" ,(req,res) =>{
    const html = `<ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html);

}); 

app.get("/api/users/:id" , (req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
    
});

app.post('/api/users' , (req,res) =>{
    const body = req.body; //obj
    users.push({id:users.length+1 , ...body});
    fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) ,(err,data) =>{
        return res.json({id:users.length ,status : "New data added!"});
    });
    
    //console.log(body);
    
});

app.put("/api/users/:id" , (req,res) =>{
    const id = Number(req.params.id);
    const body = req.body; //obj data
    
    const ind = users.findIndex((item) => item.id === id);

    if(ind !== -1){
        users[ind] = {id : id , ...body};//push to obj data to object
        fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (err,data) =>{
            return res.json({id : id , Status : 'Data Updated!'});
        });
    }
});

app.patch("/api/users/:id" , (req,res) =>{
    return res.json({status : "Pending"});
})

app.delete("/api/users/:id" , (req,res) =>{
    const id = Number(req.params.id); //1002
    const idx = users.findIndex((user) => user.id === id); // 1002,-1

    if(idx !== -1)
        {
        users = users.filter((item) => item.id !== id);
        fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (err,data) =>{
            return res.json({id : id , Status : "Data Deleted!"});
        });
        

    }
    
});


const PORT = 8000;
app.listen(PORT , () =>{
    console.log(`Your server runs in http://localhost:${PORT}/`);
})