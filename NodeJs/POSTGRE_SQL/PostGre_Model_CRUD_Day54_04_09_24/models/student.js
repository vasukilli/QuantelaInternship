//create model by using sequelize,DataTypes
const { Sequelize, DataTypes } = require('sequelize') //import library and access Sequelize,DataTypes classes

//create new instance of class object for Sequelize
const sequelize = new Sequelize('NodeTestDb', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
}) // connected to database

const student = sequelize.define(
  'Student',//model or table name
  {
    id: {
         primaryKey : true,
         autoIncrement : true,
         type : DataTypes.INTEGER
        },
    fullName: {
        type : DataTypes.STRING,
        allowNull : false
    },
    age: {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    gender: {
        type : DataTypes.STRING,
        allowNull : false
    },
    marks: {
        type : DataTypes.INTEGER,
        allowNull : false
    }
  }, // columns names
  {
    tableName: 'Students',
    timestamps: false //optional 
  }
);


module.exports = sequelize;
