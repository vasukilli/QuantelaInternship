const express = require("express");
const app = express();
const mongoose = require("mongoose");
 
//middleware
app.use(express.urlencoded({extended:false}));
//connection
mongoose
        .connect("mongodb://127.0.0.1:27017/CarDb")
        .then(()=> console.log("Mongodb connected Successfully!"))
        .catch((err) => console.log(err));

//Schema
const carSchemas = mongoose.Schema({
    carMake : {
        type : String,
        required : true,
    },
    carModel : {
        type : String,
        required : true,
    },
    carModelYear :{
        type : Number,
        required : true,
    },
    carVin :{
        type : String,
        required : true,
    },

},{timestamp : true});

//Model 
const Cars = mongoose.model("car",carSchemas);

app.get('/api/cars' , async (req,res) =>{
    const carsData = await Cars.find({});
    return res.json(carsData);
});

app.get('/api/cars/data' , async (req,res) =>{
    const allDbCars = Cars.find({});
    const html = `<ul>
    ${allDbCars.map((car) => `<li>${car.carMake} - ${car.carModel} - ${car.carModelYear} - ${car.carVin}</li>`).join("")}
    </ul>`;
    res.send(html);
});

app.post('/api/cars' , async (req,res) =>{
    const body = req.body;
    if(!body || !body.car_make || !body.car_model || !body.car_model_year || !body.car_vin){
        return res.status(404).json({msg : "All fields are required!"});
    }else{
        const result = Cars.create({
            carMake : body.car_make,
            carModel : body.car_model,
            carModelYear : body.car_model_year,
            carVin : body.car_vin,
        });
        return res.status(200).json({msg : "Success!"});
    }
});

app
  .route('/api/users/:id')
  .get(async (req,res) =>{
        const carData = await Cars.findById(req.params.id);
        if(!carData){
            return res.status(404).json({msg : "Data Not Presented!"});
        }
    return res.json(carData);
        
  })
  .patch(async (req,res) =>{
    await Cars.findByIdAndUpdate(req.params.id , {car_make : "changed" , car_model : "changed" , car_model_year : "changed" ,car_vin : "changed"});
    return res.status(200).json({msg : "Success!"});

  })
  .delete(async (req,res) =>{
    await Cars.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg : "Sucess"});

  });

const PORT = 8004;
app.listen(PORT , () =>{
    console.log(`Your server runs at http://localhost:${PORT}`);
});