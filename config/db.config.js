const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(
process.env.DB_NAME, 
process.env.DB_USER,
process.env.DB_PASSWORD,

{
  host: "localhost",
  dialect: "mysql",

});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

sequelize
  .sync()
  .then(() => {
    console.log("Table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = sequelize;
