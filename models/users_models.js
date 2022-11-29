
const sequelize = require("../config//db.config");
const { DataTypes } = require("sequelize");
const shortid = require('shortid');
// const Note = require("./notes_models");
// const Note = require("./notes_models");
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


const User = sequelize.define("users", {  
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        required: true,
        default: shortid.generate(),
    },

    first_name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
    }, 

    last_name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
    }, 

    username: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
    }, 

    emal_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }

);

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

User.hasOne(Vault);
Vault.belongsTo(User);
User.hasMany(Note);

module.exports = User;