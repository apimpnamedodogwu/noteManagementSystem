const { DataTypes } = require("sequelize");
const sequelize = require("../config//db.config");
const shortid = require('shortid');
const User = require('./users_models');


   const Vault = sequelize. define("vaults", {
        id: {
            primaryKey: true,
        type: DataTypes.STRING,
        required: true,
        default: shortid.generate(),
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
   }

   );

   Vault.belongsTo(User);

   module.exports = Vault;