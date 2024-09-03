const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'root',
  database: 'NodeTestDb'
})

const getUsers = async (req, res) => {
  try {
    const query = 'select * from "Employees" order by id asc'
    const result = await pool.query(query)
    if (!result) {
      return res.status(200).json({ msg: 'No data available!' })
    }
    return res.status(200).json({ data: result.rows })
    //return res.status(200).send(result.rows);
  } catch (err) {
    return res.status(404).json({
      msg: 'Database error!'
    })
  }
}
const getUserById = async (req, res) => {
  //2
  try {
    const Id = parseInt(req.params.id) //2
    const query = 'select * from "Employees" where id = $1'
    const values = [Id]
    const result = await pool.query(query, values)
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: 'No data available!' })
    }
    return res.status(200).json({ data: result.rows })
  } catch (err) {
    return res.status(404).json({ msg: 'Database error!' })
  }
}
const createUser = async (req, res) => {
  const { id, name, age, company, salary, exp } = req.body
  if (!id || !name || !age || !company || !salary || !exp) {
    return res.status(404).json({ msg: 'All fields are required!' })
  }
  try {
    const query =
      'insert into "Employees" (id,"name",age,"company",salary,"exp") values ($1,$2,$3,$4,$5,$6)'
    const values = [id, name, age, company, salary, exp]

    const result = await pool.query(query, values)
    return res.status(200).json({ msg: 'Data added successfully!' , "data" : result.rows});
  } catch (err) {
    return res.status(404).json({ msg: 'Database error!' })
  }
}
const updateUser = async (req, res) => {
      const Id = parseInt(req.params.id);
      const {name,age,company,salary,exp} = req.body;

      try{
        const query = 'update "Employees" set "name" = $2 , age = $3 , "company" = $4 , salary = $5 , "exp" = $6 where id = $1';
        const values = [Id,name,age,company,salary,exp];
        const result = await pool.query(query,values);
        return res.status(200).json({"msg" : "updated successfully!"});

      }catch(err){
        return res.status(500).json({"msg" : "Database error!"});
      }
}
const deleteUser = async (req, res) => {
    const Id =parseInt(req.params.id);
    try{
        const query = 'delete from "Employees" where id = $1';
        const values = [Id];
        const result = await pool.query(query,values);
        // if(result.rows.length === 0){
        //     return res.status(404).json({"msg" : "Data not found!"});
        // }
        return res.status(200).json({"msg" : "Data deleted successfully!"});

    }catch(err){
        return res.status(500).json({"msg":"Database error!"});
    }

}
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
