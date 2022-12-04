const { DataTypes } = require("sequelize");
const sequelize = require("../config//db.config");
const shortid = require("shortid");

const Vault = sequelize.define("vaults", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Vault;
