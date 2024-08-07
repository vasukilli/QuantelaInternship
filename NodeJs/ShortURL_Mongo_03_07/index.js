const express = require("express");
const app = express();

//mongodb connection 
const {createMongoDbCon} = require('./connection');
createMongoDbCon("mongodb://localhost:27017/ShortUrl")
.then(() => console.log("MongodB connected Successfully!"))
.catch((err) => console.log(err));

//middileware 
app.use(express.json());

//Getting response from server 
const URL = require('./models/url');
let entry;
app.get('/:shortid' , async (req,res) =>{
      const shortId = req.params.shortid;
      entry =  await URL.findOneAndUpdate({
        shortId,
      },{
         $push :{
            visitHistory : {
                timestamp : Date.now(),
            },
         },
      });
    return res.status(200).redirect(entry.redirectUrl);
});

//routers handling 
const routerHandle = require('./routes/url');
app.use('/url',routerHandle);



const PORT = 8008;
app.listen(PORT , () =>{
    console.log(`Your server runs at http://localhost:${PORT}/`);
})