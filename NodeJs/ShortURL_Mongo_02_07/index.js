const express = require("express");
const app = express();

//MongoDb connection

const {handleMongoCon} = require('./connection');

handleMongoCon("mongodb://localhost:27017/ShortUrl")
.then(() => console.log("MongoDb Connected!"))
.catch((err) => console.log(err));

//MidileWares 
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//Getting requsted url
let entry;
const URL = require('./models/url');
app.get('/:shortId' , async (req,res) =>{
    const shortId = req.params.shortId;//xyzAbc
     entry = await URL.findOneAndUpdate({
        shortId
    },{
        $push : {
            visitHistory : {
                timestamp : Date.now(),
            }
        }
    });
    return res.redirect(entry.requestedURL);

});
//routing handle 
const routerHandle = require('./routes/url');
app.use('/url',routerHandle);

const PORT = 8006;
app.listen(PORT , () =>{
    console.log(` Your server runs in http://localhost:${PORT}/`);
});