const express = require('express');
const app = express();
const PORT = 3000;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'note_management_database',
 'root',
 '1234',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});