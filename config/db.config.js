const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("note_management_database", "newuser", "password", {
  host: "127.0.0.1",
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
