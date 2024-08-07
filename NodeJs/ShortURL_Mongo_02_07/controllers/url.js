const shortid = require("shortid");
const URL = require('../models/url');

async function handleGenerateShortUrl(req,res){
    const body = req.body;
    if(!body.url){
        return res.status(404).json({msg : "url required!"});
    }
    const shortID = shortid.generate();
    const result = await URL.create({
        shortId: shortID,
        requestedURL: body.url,
        visitHistory : [],

    });
    

    return res.status(200).json({ id : shortID});

}
async function handleClicksAndAnalics(req,res){
            const shortId = req.params.shortid;
            const result = await URL.findOne({
                shortId
            });
            return res.status(200).json({ clicks : result.visitHistory.length ,
                analysis : result.visitHistory
            });
}

module.exports = {handleGenerateShortUrl,handleClicksAndAnalics}