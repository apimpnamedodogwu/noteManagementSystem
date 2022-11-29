const { DataTypes } = require("sequelize");
const sequelize = require("../config//db.config");


const shortid = require('shortid');
const User = require('./users_models');
const Vault = require('./vaults_models');

const Note = sequelize.define("notes", {
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

}
);



// Note.hasOne(User);
// Note.hasOne(Vault);
Note.belongsTo(User);
Note.belongsTo(Vault);

module.exports = Note;