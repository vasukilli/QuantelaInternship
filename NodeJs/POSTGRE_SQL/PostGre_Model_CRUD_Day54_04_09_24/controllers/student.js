const sequelize = require('../models/student');//we can access table in database we can handle

const getStudents = async (req,res) =>{
   try{
      const query = 'select * from "Students" order by id asc';
      const [result] = await sequelize.query(query); // Array return 
      if(result.length === 0){
         return res.status(404).json({"msg" : "No data available!"});
      }
      return res.status(200).json({"data" : result});

   }catch(err){
      return res.status(500).json({"msg":"Database error!"});
   }

}
const getStudentById = async (req,res) =>{
   const Id = parseInt(req.params.id);
   try{
      const query = 'select * from "Students" where id = $1';
      const values = [Id];
      const [result] = await sequelize.query(query,{bind : values});
      if(result.length === 0){
         return res.status(404).json({"msg" : "No data available!"});
      }
      return res.status(200).json({"data":result});

   }catch(err){
      return res.status(500).json({"msg":"Database error!"});
   }

}
const createStudent = async (req,res) =>{
   const {id,fullName,age,gender,marks} = req.body;
   if(!id || !fullName || !age || !gender || !marks) {
      return res.status(404).json({"msg" : "All fields are required!"});
   }
   try{
      const query = 'insert into "Students" (id,"fullName",age,"gender",marks) values ($1,$2,$3,$4,$5)';
      const values = [id,fullName,age,gender,marks];
      const result = await sequelize.query(query,{bind : values});
      return res.status(200).json({"msg" : "Data Added successfully!"});

   }catch(err){
      return res.status(500).json({"msg" : "Database error!"});
   }

}
const updateStudent = async (req,res) =>{
   const Id = parseInt(req.params.id);
   const {fullName,age,gender,marks} = req.body;
   if(!Id || !fullName || !age || !gender || !marks){
      return res.status(404).json({"msg" : "All fields are required!"});
   }
   try{
      const query = 'update "Students" set "fullName" = $2, age = $3 , "gender" = $4 , marks = $5 where id = $1';
      const values = [Id,fullName,age,gender,marks];
      const result = await sequelize.query(query , {bind : values});
      return res.status(200).json({"msg" : "Data updated successfully!"});

   }catch(err){
      return res.status(500).json({"msg" : "Database error!"});
   }

}
const deleteStudent = async (req,res) =>{
   const Id = parseInt(req.params.id);
   try{
      const query = 'delete from "Students" where id = $1';
      const values = [Id];
      const result = sequelize.query(query,{bind:values});
      return res.status(200).json({"msg" : "Deleted successfully!"});

   }catch(err){
      return res.status(500).json({"msg" : "Database error!"});
   }

}

module.exports = {
                   getStudents,
                   getStudentById,
                   createStudent,
                   updateStudent,
                   deleteStudent
                };