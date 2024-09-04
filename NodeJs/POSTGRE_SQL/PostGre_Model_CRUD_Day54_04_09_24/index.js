const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Middilewares for postman
app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));

//database connection
const sequelize = require('./models/student');
sequelize.sync()
.then(() => console.log('Students database created successfully!'))
.catch((err) => console.log(err));

//Routing
const studentRouter = require('./routes/student');
app.use('/api',studentRouter);

const PORT = 8008;
app.listen(PORT , () =>{
    console.log(`your server runs at http://localhost:${PORT}/`);
});