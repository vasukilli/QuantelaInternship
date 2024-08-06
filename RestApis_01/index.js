const express = require("express");
const app = express();
//let users = require("./MOCK_DATA (1).json");
const fs = require("fs");

const mongoose = require("mongoose");
//connection
mongoose
    .connect("mongodb://127.0.0.1:27017/youtube-app-1")
    .then(() => console.log("MongoDb connected"))
    .catch((err) => console.log("Mongo error" , err));
//Schema
const userSchema = new mongoose.Schema({
    title : {
        type : String,
    },
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,

    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    gender : {
        type : String,
    },
    language : {
        type : String,
    },

   

}, {timestamps : true});

//Model 
const User = mongoose.model("user",userSchema);

//midleWare
app.use(express.urlencoded({extended : false}));

app.get('/api/users' , async (req,res) =>{
    // return res.json(users); //Display json data
    const alldbUsers = await User.find({});
    res.setHeader('X-MyName',"vasu killi");
    return res.json(alldbUsers);
});

app.get('/api/users/:id' , async (req,res) =>{
    //  const id = (Number)(req.params.id);
    //  const user = users.find((user) => user.id === id);
    //  return res.json(user); //Display json data

    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({
            error : "User Not Found"
        });
    }
    return res.json(user);


});

app.get('/users/data' ,async (req,res) =>{
    // const html = `<ol>
    //     ${users.map((user) => `<li>${user.first_name + " " + user.last_name}</li>`).join("")}
    // </ol>`;

    const alldbUsers = await User.find({});
    const html = `<ul>
    ${alldbUsers
    .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
    .join("")}
    </ul>`;
    res.send(html);
});

app.post('/api/test',async (req,res) =>{
    const body = req.body;

    if(!body || !body.title || !body.first_name || !body.last_name || !body.email || !body.gender || !body.language){
        return res.status(400).json({status : "All fields are required!"});
    }
    // users.push({id : users.length+1 , ...body});
    // fs.writeFile("./MOCK_DATA (1).json" , JSON.stringify(users) , (err,data) =>{
    //     return res.json({id : users.length , status : "Data added successfully!"});
    // });
    const result = await User.create({
        title : body.title,
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email,
        gender : body.gender,
        language : body.language,

    }); 
    // console.log("result",result);
    return res.status(201).json({msg : "Success"});  
});

app.put('/api/test/:id' , (req,res) =>{
    const id = Number(req.params.id);
    const body = req.body;

    const idx = users.findIndex((user) => user.id === id);//4,-1

    if(idx !== -1){
           users[idx] = {id : id , ...body};
           fs.writeFile("./MOCK_DATA (1).json" , JSON.stringify(users) , (err,data) =>{
              return res.json({id : id , status : "Updated successfully!"});
           });
    }else{
        return res.json({ status : "no data Updated!"});
    }
});

app.patch('/api/users/:id' , async (req,res) =>{
    await User.findByIdAndUpdate(req.params.id , {lastName : 'changed'});
    return res.json({status : "Success"});
})

app.delete('/api/test/:id',async (req,res) =>{
    // const id = Number(req.params.id);
    // const idx = users.findIndex((user) => user.id === id);//4,-1

    // if(idx !== -1){
    //     users = users.map((user) => user.id !== id);
    //     fs.writeFile('./MOCK_DATA (1).json' , JSON.stringify(users) , (err,data) =>{
    //         return res.json({id : id , Staus : 'Deleted successfully!'});
    //     })
    // }else{
    //     return res.json({Status : "No data available for delete!"});
    // }
    await User.findByIdAndDelete(req.params.id);
    return res.json({Status : "Success"});

});

const PORT = 8005;
app.listen(PORT , () =>{
    console.log(`Your server runs in http://localhost:${PORT}/`);
});