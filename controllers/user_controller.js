const User = require('../models/users_models');
const Vault = require('../models/vaults_models');

exports.registerAUser = async (req, res) => {

    const existingUser = await User.findOne(req.body.email);
    if(existingUser) {
        return res.status(404).json({
            status: 'error',
            message: `User with email ${req.body.email} already exists.`
        });
    };

    const vault = await Vault.create({
        title: "",
        body: "",
        password: req.body.password,
        
    });

    const user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        vault_id: vault.id,
        
    });
    return res.status(200).json({
        status: 'success',
        message: `User with username ${user.username} has been successfully registered.`
    });
}

const userCanCreateANote = (req, res) => {
    const existingUser = User.findByPk(req.params.id);

    if(!existingUser) {
        return res.status(404).json({
            status: 'error',
            message: `User with ${req.params.id} does not exist.`
        });
    };

    
}