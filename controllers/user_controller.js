const User = require('../models/users_models');

exports.registerAUser = async (req, res) => {

    const existingUser = await User.findOne(req.body.email);
    if(existingUser) {
        return res.status(404).json({
            status: 'error',
            message: `User with email ${req.body.email} already exists.`
        });
    };

    const user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email
    });
    return res.status(200).json({
        status: 'success',
        message: `User with username ${user.username} has been successfully registered.`
    });
}