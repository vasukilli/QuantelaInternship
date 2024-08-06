const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

app.use(express.json())

// By using routing..


app.get("/api/users" ,(req,res) =>{
    return res.json(users);
});


app
    .route("/api/users/:id")
    .get((req,res) =>{
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req,res) =>{
        return res.json({status : "Pending"});
    })
    .delete((req,res) =>{
        return res.json({status : "Pending"});
    })
const PORT = 8001;
app.listen(PORT , () =>{
    console.log(`Your server runs in http://localhost:${PORT}/`);
})