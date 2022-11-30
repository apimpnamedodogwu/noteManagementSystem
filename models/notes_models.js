const { DataTypes } = require("sequelize");
const sequelize = require("../config//db.config");


const shortid = require('shortid');

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
        unique: true,
    },

    body: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}
);


module.exports = Note;