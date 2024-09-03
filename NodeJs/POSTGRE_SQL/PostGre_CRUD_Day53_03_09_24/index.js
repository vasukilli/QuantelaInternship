const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));



const userRouter = require('./routes/user');
app.use('/api',userRouter)

const PORT = 8005;
app.listen(PORT , () =>{
    console.log(`your server runs at http://localhost:${PORT}/`);
});
