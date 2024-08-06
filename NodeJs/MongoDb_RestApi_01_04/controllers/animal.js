const Animal = require("../models/animal");

async function handleGetAllAnimals(req,res) {
    const animals = await Animal.find({});
    return res.json(animals);
}

async function handleGetAnimalById(req,res) {
    const animal = await Animal.findById(req.params.id);
    return res.json(animal);
}

async function handleUpdateAnimalById(req,res) {
    await Animal.findByIdAndUpdate(req.params.id , {animalName : "Sai"});
    return res.json({msg : "success"});
}

async function handleDleteAnimalById(req,res) {
    await Animal.findByIdAndDelete(req.params.id);
    return res.json({msg : "Success"});
}

async function handleCreateNewAnimal(req,res){
    const body = req.body;
    if(!body || !body.animal_Name || !body.anima_SpecNam || !body.plant_Fam || !body.city || !body.country || !body.phone){
        return res.json({msg : "All fields are required!"});
    }
    const result = await Animal.create({
        animalName : body.animal_Name,
        animaSpecNam : body.anima_SpecNam,
        plantFam : body.plant_Fam,
        city : body.city,
        country : body.country,
        phone : body.phone,

    });
    return res.status(200).json({msg : "Success!" ,id : result._id});
}

async function handleGetAlldataDisplayHtml(req,res){
    try{
        const animalDbData = await Animal.find({});
        const html = `<ul>
        ${animalDbData
        .map((ani) => `<li>${ani.animalName} - ${ani.animaSpecNam} - ${ani.plantFam} - ${ani.city} - ${ani.country} - ${ani.phone} </li>`)
        .join("")}
        </ul>`;
    
        res.send(html);
        }catch(err){
            return res.status(500).json({msg : "error while fetching the data"});
        }
}

module.exports = {
    handleGetAllAnimals,
    handleGetAnimalById,
    handleUpdateAnimalById,
    handleDleteAnimalById,
    handleCreateNewAnimal,
    handleGetAlldataDisplayHtml,
}