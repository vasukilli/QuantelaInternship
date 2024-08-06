const Person = require('./models/person.js');

//Get 
async function handleGetAllData(req,res){
    const body = await Person.find({});
    if(!body){
        return res.status(400).json({msg : "No data available"});
    }
    return res.json(body);
}
//Get By id
async function handleGetByIdData(req,res){
    const person = await Person.findById(req.params.id);
    if(!person){
        return res.status(400).json({msg : "No data available!"});
    }
    return res.json(person);
}
//Get data from the html

async function handleGetDataFromHtml(req,res){
    const allDbPerson = await Person.find({});
    const html = `<ul>
    ${allDbPerson.map((pers) => `<li>${pers.Name} - ${pers.Age} </li>`).join("")}
    </ul>`;
    res.send(html);
}

//Post

async function handlePostAllPerson(req,res){
         const body = req.body;
         if(!body || !body.p_name || !body.p_age || !body.p_gender || !body.p_phone){
            return res.status(404).json({msg : "All fields are required!"});
         }
         const result = await Person.create({
             Name : body.p_name,
             Age : body.p_age,
             Gender : body.p_gender,
             Phone : body.p_phone,
         });
         return res.status(200).json({msg : "Success!"});
}

//Patch
async function handleUpdateThedata(req,res){
      await Person.findByIdAndUpdate(req.params.id , {Name : "Quntela"});
      return res.status(200).json({msg : "Success!"});
}
//Delete
async function handleDeleteById(req,res){
    await Person.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg : "Success!"});
}

module.exports = {
    handlePostAllPerson,
    handleGetAllData,
    handleGetByIdData,
    handleGetDataFromHtml,
    handleUpdateThedata,
    handleDeleteById
}