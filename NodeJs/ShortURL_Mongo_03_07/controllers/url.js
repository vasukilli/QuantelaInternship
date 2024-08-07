const shortid = require("shortid");
const URL = require('../models/url');

async function handleShortUrl(req,res){
    const body = req.body;
    if(!body.url){
        return res.status(404).json({msg : "url required!"});
    }
    const shortID = shortid.generate();//xyvACd
    await URL.create({
        shortId:shortID,
        redirectUrl:body.url,
        visitHistory :[],
    });

    return res.status(200).json({ id : shortID });
}

async function handleGetClicksAnalytics(req,res){
           const shortId = req.params.shortid;
           const result = await URL.findOne({
            shortId,
           });
        return res.status(200).json({ clicks : result.visitHistory.length ,
              analytics : result.visitHistory
        });
}

module.exports = {handleShortUrl,handleGetClicksAnalytics};