const sequelize = require("../config//db.config");
const { DataTypes } = require("sequelize");
const shortid = require("shortid");
const Vault = require("./vaults_models");
const Note = require("./notes_models");

const User = sequelize.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },

  first_name: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },

  last_name: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },

  username: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },

  email_address: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

User.hasOne(Vault);
User.hasMany(Note);
Note.belongsTo(User);
Note.belongsTo(Vault);
Vault.belongsTo(User);

module.exports = User;
