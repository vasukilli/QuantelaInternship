const shortid = require("shortid"); 
const URL = require('../models/url');

const generateShortId = async (req,res) =>{
    const shortID = shortid.generate(); //wexyzde
    const body = req.body;
    if(!body.url){
        return res.status(404).json({"msg" : "Url must be required!"});
    }
    try{
        const result = await URL.create({
            shortId : shortID,
            redirectUrl : body.url,
            visitHistory : []
        });
        /*return res.status(200).json({"id" : shortID}); */
        return res.render("home",{
            id : shortID
        });

    }catch(err){
        return res.status(500).json({"msg" : "Network error!"});
    }


}
const handleAnalytics = async (req,res) =>{
    const shortId = req.params.shortid;
    const result = await URL.findOne({shortId : shortId});
    return res.status(200).json({
        "clicks" : result.visitHistory.length,
        "Analysis" : result.visitHistory
    });

}
module.exports = {
    generateShortId,
    handleAnalytics
}
